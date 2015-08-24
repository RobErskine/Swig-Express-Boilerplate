module.exports = function(app){
    // Declare routes here
    var index = require('./routes/index');


    // Bind routes here
    app.use('/', index);
};
