
const
    http = require("http"),
    os = require("os");

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(`Hello World! Machine: ${os.hostname()}, Type: ${os.type()}`);
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);