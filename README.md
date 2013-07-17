# ANGULAR-CORS-TEST

Small demo: a frontend written as a node/express application
serves an angular client side application that does json invocations
to a backend server running as a second node/express application.

Normally, the browser will allow javascript only to invoke REST services
from the server that hosted the javascript (for security reasons),
but the backend serves some CORS headers that confirm it knows the
frontend that served the javascript, and it's OK to let the javascript
see the result of the REST invocation.

Allowed hosts are hardcoded in lib/backend.js.

Running it

 * install the node javascript engine.
 * install the rubygem 'compass', needed to compile the bootstrap CSS
 * run 'npm install' to download dependencies written in node
 * run 'npm install -g grunt-cli' to make the grunt build tool globally
   available
 * run 'grunt build' to test and build an optimized version of the app
 * run 'node backend.js' to start the backend
 * run 'node app.js' to start the frontend
 * navigate to to http://localhost:5000/ to see a trivial application


