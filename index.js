const Pkg = require("./package");
const http = require("http");
const config = require("config");
const commander = require("commander");
const Debug = require("debug");

process.title = config.name || "boilerplate-app";

const App = require("./lib/app");
const debug = Debug(`${process.title}:server`);

const program = commander;
program
  .option("-p,--port <PORT>", "PORT", Number, process.env.PORT || config.port || 8080);
program.parse(process.argv);

const app = new App(config);
const server = http.createServer(app.app);
server.listen(program.port);
server.on("listening", ()=>{
  debug(`listen on ${program.port}`);
});
server.on("error", err => {
  debug(err.stack);
  process.exit(-1);
});

process.on("uncaughtException", err =>{
  debug(err.stack);
  process.exit(-1);
});
