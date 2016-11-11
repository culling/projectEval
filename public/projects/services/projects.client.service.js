angular.module('projects', []).factory('Projects', ['$resource', 
function($resource){
 /*   
        var ProjectObjects = $resource('/api/projects/:id', {id:'@id'}, {
            query:{
                isArray: true,
                method: 'get'
                
            }
        });

        var response = ProjectObjects.query();
        var data1 = response.$promise.then(function(data){
            //console.log(data);
            //$scope.projects = data;
            }, function(err){
            console.log('err:' + err);
        });
*/
    
    //console.log('service is requested');
    return $resource('/api/projects/:id', {id:'@id'}
//    return data1;

    
//}]);
    )}]);