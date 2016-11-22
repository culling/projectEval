angular.module('projects', []).factory('Projects', ['$resource', 
function($resource){
    return $resource('/api/projects/:id', {id:'@id'}
    )
}]);