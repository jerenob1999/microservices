import Server from "./server";

const server = new Server();

server.listen();
console.log(server.routers());
