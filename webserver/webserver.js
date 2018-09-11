// const fs = require('fs');
// const http = require('http');
// const port = 3000;
// let server = http.createServer();
//
// server.on('request', (request, response) => {
//   let src = fs.createReadStream('./index.html');
// 	src.pipe(response);
//   console.log("URL", request.url);
//   console.log("METHOD", request.method);
// });
//
// server.listen(port);
// console.log("Server now listening to port " + port);


let http = require('http');
let answer = 'hello world';

function request(request, response) {
  if (request.url === '/') {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(answer);
    response.end();
  } else if (request.url === '/upper/') {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(answer.toUpperCase());
    response.end();
  } else {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 NOT FOUND");
    response.end();
  }
}

http.createServer(request).listen(3000);

console.log("Server is now running..");
