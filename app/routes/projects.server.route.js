var projects    =   require('../../app/controllers/projects.server.controllers');

module.exports  =   function(app){

    app.route('/api/projects')
        .get(projects.list)
        .post(projects.create);

    app.route('/create')
        .get(function(req,res){
            res.redirect('/create.html')
            
        });

};