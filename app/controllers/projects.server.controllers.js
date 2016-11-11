var Project         = require('mongoose').model('Project');


var getErrorMessage = function(err){
    var message = '';
    if (err.code){
        switch (err.code){
            default:    
                message = 'something went wrong';
        }
    } else {
        for(var errName in err.errors){
           if (err.errors[errName].message) message = err.errors[errName].message;

        }
    }
    return message;
};



exports.create      = function (req, res, next){
    console.log('create');
    if(!req.project){
        console.log('req.body: '   + (req.body));
        var project    = new Project (req.body);
        
        console.log('project:' + project);
        var message = null;

        console.log('before save');
        project.save(function(err){
            if(err){
                var message = getErrorMessage(err);
                console.log('error message: ' + message);
                //return res.redirect('/signup');
            } else {
                res.json(project);
            }

        });
    }else{
        //return res.redirect('/');
        console.log('else');
    }
};



exports.list    =   function(req, res, next){
    Project.find({},
    
    function(err, projects){
        if (err){
            return next(err);
        } else {
            res.json(projects);
        }
    });
};