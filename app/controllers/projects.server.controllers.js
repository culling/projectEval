var Project         = require('mongoose').model('Project');


var getErrorMessage = function(err){
    var message = '';
    if (err.code){
        switch (err.code){
            case 11000:
            case 11001:
                message = 'Project already exists';
                break;
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
            } else {
                res.json(project);
            }
        });
    }else{
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


exports.read = function (req, res){
    res.json(req.user);
};


exports.projectById = function (req, res, next, id){
    console.log('project Id: '+ id);
    Project.findById(id).select().exec(function(err, project){
        if(err) return next (err);
        if(!project) return next(new Error('Failed to load Project ' + id));
        req.project = project;
        next();
    });
};

exports.delete = function (req, res, next){
    req.project.remove(function(err){
        if(err){
            return next(err);
        } else{

            res.redirect('/');
        }
    });
};