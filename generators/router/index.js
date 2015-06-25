var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    createRoute: function () {
        console.log('I can create a route');
    }
});