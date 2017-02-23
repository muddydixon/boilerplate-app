const express = require("express");
const uuid = require("uuid");
const errors = require("../errors");
const BaseRouter = require("./base-router");

module.exports = class UserRouter extends BaseRouter {
  constructor(config){
    super(config);

    // set base path
    this.basePath = "/users";
    // set true if require authorized
    this.requireAuth = false;
  }

  // implementations
  signup(req, res, next){
    const [err, validated] = req.model.User.precheck.validateSync(req.body);
    if(err) return next(new errors.UnauthorizedError());
    const salt = uuid().replace(/\-/g, "");
    const shadow = req.model.User.createShadow(req.body.username, req.body.password, salt);
    return new req.model.User({username: req.body.username, salt, shadow}).save().then((user)=>{
      req.session.user = user;
      res.status(201).json(user);
    }).catch(next);
  }
  signin(req, res, next){
    const [err, validated] = req.model.User.precheck.validateSync(req.body);
    if(err) return next(new errors.UnauthorizedError());
    return req.model.User.signin(req.body.username, req.body.password).then((user)=>{
      req.session.user = user;
      res.json(user);
    }).catch(next);
  }
  signout(req, res, next){
    req.session.destroy();
    res.json({});
  }
  getAuthUser(req, res, next){
    if(req.session.user) return res.json(req.session.user);
    res.status(401);
    return next(new errors.UnauthorizedError());
  }
  getAll(req, res, next){
    req.model.User.fetchAll().then((users)=>{
      res.json(users);
    }).catch(next);
  }
};
