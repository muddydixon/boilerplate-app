const express = require("express");
const BodyParser = require("body-parser");
const CookieParser = require("cookie-parser");
const Session = require("express-session");
const ServeStatic = require("serve-static");
const Fs = require("fs");
const Path = require("path");
const debug = require("debug")(`${process.title}:app`);
const Model = require("./model");

module.exports = class App {
  constructor(config){
    this.app = express();
    this.routers = this.loadController();
    this.setRouting(config);
  }
  loadController(){
    const routers = Fs.readdirSync(Path.join(__dirname, "controllers"));
    return routers.map(router => require(Path.join(__dirname, "controllers", router)));
  }
  checkAuth(req, res, next){
    if(req.session.user) return next();
    res.status(401);
    return next(new Error("unauthorized"));
  }
  setRouting(config){
    const model = Model(config);
    this.app.disable("x-powered-by");
    this.app.use(BodyParser.json());
    this.app.use(CookieParser());
    this.app.use(Session({
      secret: config.secret || "mysecret",
      resave: false,
      saveUninitialized: true}));
    this.app.use(ServeStatic("public", {index: ["index.html"]}));
    this.app.use(ServeStatic("node_modules"));
    this.app.use((req, res, next)=>{ req.model = model; next(); });

    // set routers
    this.routers.forEach(Router => {
      const router = new Router(config);
      if(router.requireAuth) this.app.use(router.basePath, this.checkAuth);
      this.app.use(router.basePath, router.router);
      debug(`load ${router.constructor.name}`);
    });

    // error handlers
    this.app.use((req, res, next)=>{
      res.status(404).json({});
    });
    this.app.use((err, req, res, next)=>{
      res.status(err.statusCode || 500).json({message: err.message});
    });
  }
};
