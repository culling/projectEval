projects    =   require('../../app/controllers/projects.server.controller');

module.exports  = function(app){
    app.get('/', projects.render);
};