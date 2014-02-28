var http = require("http"),
    url  = require("url"),
    port = Number(process.env.PORT || 8888);

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    route(handle, pathname, response);
  }

  http.createServer(onRequest).listen(port);
}

exports.start = start;
