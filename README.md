##Goals

Aside from simply building out a vanity page and having some fun with Node.js, I had three primary goals when working on this project:

1. Make it fast
2. Make it (mostly) responsive
3. Minimize the number of dependencies

####Fast
I'm a firm believer in the importance of performant websites. Many a study has shown that even small increases in page load times can result in big drops in user retention and engagement. So my goal with this project was to maintain lightning fast load times. Google's PageSpeed insights tool came in handy; if you've never used it yourself, I recommend [checking it out](http://developers.google.com/speed/pagespeed/insights/).

A lot of the optimization simply came from inlining immediately used CSS and JS above and below the HTML, respectively. There's also some SVG mixed in to avoid loading extra images and [tiny png](https://tinypng.com/) compression for the one image that I do load. I thought about going so far as to integrate my app with CloudFlare, but then decided that was a bit much for my static site. Plus, PageSpeed tells me I did a pretty good job:

![Site Performance](https://s3.amazonaws.com/mitchjlee/assets/mitchjlee_pagespeed.png)

I'll be the first to admit that the code you see here is neither well organized nor easily maintainable. However, it suits my needs given the limited scope of the project.

####Responsive
As [Josh Clark](https://twitter.com/globalmoxie) points out, "If it's not good for the mobile user, it's not good for any user. We're the same people." I agree, which is why I feel strongly that every website should not only *work* but also *look good* regardless of the device you're using.

####Standalone
One of my big pet peeves is when people include dependencies without putting much thought into their necessity. If you're only going to use one function from `Underscore`, write it yourself! If you don't need to support old versions of IE, [you probably don't need to include jQuery](http://youmightnotneedjquery.com/). Simplicity is king, and minimizing the number of dependencies is a great way to limit the complexity of your app. Faster load times, easier testing, and better maintainability are all good reasons for taking a hard look at any dependency that you include.

For this app, I specifically avoided frameworks like `Express` for the sole reason that I didn't need all of the bells and whistles that came with it. Since I was just building a simple one page app, vanilla `Node` worked just fine. That said, I am by no means saying that all dependencies are bad. For example, I included `Jade` as a templating language because it gave me a lot of functionality that I wanted and could not easily reproduce myself.

##Structure
* `README.md` - this file
* `Procfile` - heroku configuration
* `Package.json` - app info and dependencies
* `index.js` - intializes the node app and defines the routes
* `requestHandlers.js` - defines the controller actions
* `router.js` - routes incoming requests
* `server.js` - creates the http server and parses the request path
* `views/`
  * `index.jade` - client side logic
* `tests/`
  * `integration.js` - sample test file for integration testing

##Usage

1. Make sure all dependencies are installed by running `npm install`
2. Start up the node server by running `node index.js`
3. Navigate to `localhost:8888` and enjoy

##Tests

This is a static website by most accounts, but I always like to have at least some test coverage. *Assuming the server is running*, type `mocha` to run the test suite.
