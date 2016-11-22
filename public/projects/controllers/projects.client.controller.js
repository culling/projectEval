angular.module('projects').controller('ProjectsController', [ '$scope', '$filter', '$resource','Projects',
    function($scope, $filter, $resource, Projects){
    //http://krispo.github.io/angular-nvd3/#/scatterChart
       var ProjectObjects = $resource('/api/projects/:id', {id:'@id'}, {
            query:{
                isArray: true,
                method: 'GET'   
            }
        });

        var response = ProjectObjects.query();
        response.$promise.then(function(data){
            $scope.projects = data;
            }, function(err){
            console.log('err:' + err);
        });

    }
]);