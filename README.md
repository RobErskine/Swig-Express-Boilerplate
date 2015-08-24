Swig+Express=Boilerplate
============

Personal Swig+Express boilerplate for jumpstarting small webapps

Node.js/Express/Swig/Sass/

Development:

1. Use  `grunt nodemon` to start the development server. Nodemon will watch any server-side files and restart the server on save.
2. Use `grunt watch` to enable to Grunt workflow for any client-side work. This will also allow the use of the Live Reload Chrome Extension as well as other registered Grunt tasks.
3. When working on server-side. Please define routes in routes folder then declare and bind them in routes.js in the project root.
4. When installing additional `node_modules` use `npm install module --save` in order to add the latest stable version to package.json.



Staging:
1. If using a cloud deployment service a port will be dynamically assigned by them via the `bin/www` start-up script.
2. For Ubuntu installations use `npm run staging` for your staging environment to start the node server. (Be mindful of multiple instances of this boilerplate on the same server as the port will clash).


Production:
1. 1. If using a cloud deployment service a port will be dynamically assigned by them via the `bin/www` start-up script.
2. For Ubuntu installations use `npm start` for your staging environment to start the node server. (Be mindful of multiple instances of this boilerplate on the same server as the port will clash).

