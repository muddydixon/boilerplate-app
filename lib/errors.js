const createError = require("create-error");

module.exports = {
  InvalidParameterError: createError("InvalidParameterError"),
  InvalidUserParameterError: createError("InvalidUserParameterError", {message: "username or password invalid"}),
  UnauthorizedError: createError("UnauthorizedError")
};
