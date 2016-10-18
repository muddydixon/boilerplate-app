const express = require("express");
const uuid = require("uuid");
const errors = require("../errors");
const debug = require("debug")(`${process.title}:base`);

module.exports = class BaseRouter {
  constructor(config){
    // set base path
    this.basePath = "/bases";
    // set true if require authorized
    this.requireAuth = false;

    const router = this.router = express.Router();

    router.get("/",       this.getAll);
    router.post("/",      this.create);

    router.get("/:id",    this.get);
    router.put("/:id",    this.modify);
    router.delete("/:id", this.delete);
  }

  // implementations
  getAll(req, res, next){
  }
  create(req, res, next){
  }
  get(req, res, next){
  }
  modify(req, res, next){
  }
  delete(req, res, next){
  }
};
