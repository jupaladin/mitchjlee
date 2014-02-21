function route(handle, pathname, response) {
  if (typeof handle[pathname] === 'function') {
    console.log("Request handler " + pathname + " was called.");
    handle[pathname](response);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not Found");
    response.end();
  }
}

exports.route = route;
