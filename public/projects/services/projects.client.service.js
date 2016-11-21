angular.module('projects', []).factory('Projects', ['$resource', 
function($resource){
    
    //console.log('service is requested');
    return $resource('/api/projects/:id', {id:'@id'}
//    return data1;

    
//}]);
    )}]);