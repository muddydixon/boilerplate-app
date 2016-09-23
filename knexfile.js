// Update with your config settings.

const config = require("config");
module.exports = {
  development: config.database,
  staging:     config.database,
  production:  config.database
};
