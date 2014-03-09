###Structure
* `README.md` - this file
* `Procfile -` heroku configuration
* `Package.json` - app info and dependencies
* `index.js` - intializes the node app and defines the routes
* `requestHandlers.js` - defines the controller actions
* `router.js` - routes incoming requests
* `server.js` - creates the http server and parses the request path
* `views/`
  * `index.jade` - what you see in your browser
* `tests/`
  * `integration.js` - a sample test file for integration testing

###Usage

1. Make sure all dependencies are installed by running `node install`
2. Start up the node server by running `node index.js`
3. Navigate to `localhost:8888` and enjoy

###Tests

This is a static website by most accounts, but I always like to have at least some test coverage. *Assuming the server is running*, use `mocha` to run the test suite.
