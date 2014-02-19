var http = require("http"),
    url  = require("url");

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;

    route(pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Welcome to mitchjlee.com");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
}

exports.start = start;
