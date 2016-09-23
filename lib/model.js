const Knex = require("knex");
const Bookshelf = require("bookshelf");
const crypto = require("crypto");
const Checkit = require("checkit");
const debug = require("debug")(`${process.title}:model`);
const errors = require("./errors");

module.exports = (config)=>{
  const knex = Knex(config.database);
  const bookshelf = Bookshelf(knex);

  const User = bookshelf.Model.extend({
    tableName: "users",
    toJSON(){}
  }, {
    singin(username, password){
      return new Promise((resolve, reject)=>{
        return new User({username: username}).fetch({require: true}).then((user)=>{
          const shadow = User.createShadow(username, password, user.get("salt"));
          if(shadow === user.get("shadow"))
            return reject(new Error(`shadow unmatch expect ${user.get("shadow")}, actual ${shadow}`));
          return resolve(user);
        }).catch((err)=>{
          debug(err.stack);
          throw new errors.InvalidUserParameterError();
        });
      });
    },
    createShadow(username, password, salt){
      const shadow = crypto.createHash("sha256")
              .update(`${username}-${password}-${salt}`)
              .digest("hex");
      return shadow;
    },
    precheck: new Checkit({
      username: ["required", "string", "minLength:1", "maxLength:16"],
      password: ["required", "string", "minLength:1", "maxLength:16"]
    })
  });

  // exports
  return {
    User
  };
};
