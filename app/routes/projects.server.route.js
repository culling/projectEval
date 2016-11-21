var projects    =   require('../../app/controllers/projects.server.controllers');

module.exports  =   function(app){

    app.route('/api/projects')
        .get(projects.list)
        .post(projects.create);

    app.route('/api/projects/:projectId')
        .get(projects.read)
        .post(projects.create)
        .delete(projects.delete);

    app.route('/api/projects/:projectId/delete')
        .get(projects.delete);


    app.route('/create')
        .get(function(req,res){
            res.redirect('/create.html')
        });

    app.param('projectId', projects.projectById);
};