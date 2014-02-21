var jade = require("jade");

function index(response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  var body = jade.renderFile("views/index.jade");
  response.write(body);
  response.end();
}

exports.index = index;
