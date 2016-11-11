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
            console.log(data);
            
            $scope.projects = data;
            
            /*
            var chartData = [];
            for (var i = 0 ; i < data.length; i++ ){
                chartData[i] = {
                    key: data[i].projectName,
                    values:  [{
                                 x: data[i].maximumCost,
                                 y: data[i].maximumBenefit,
                                 z: (data[i].maximumBenefit * -1) 
                                }]
                }
            };

            console.log(chartData);

            

            $scope.data = chartData;
            */
            
            

            //Scope Options - Bar chart
            /*
            $scope.options = {
                chart: {
                    type: 'discreteBarChart',
                    height: 450,
                    margin : {
                        top: 20,
                        right: 20,
                        bottom: 60,
                        left: 55
                    },
                    x: function(d){ return d.label; },
                    y: function(d){ return d.value; },
                    showValues: true,
                    valueFormat: function(d){
                        return d3.format(',.0f')(d);
                    },
                    transitionDuration: 500,
                    xAxis: {
                        axisLabel: 'Project Name'
                    },
                    yAxis: {
                        axisLabel: 'maximumCost',
                        axisLabelDistance: 30
                    }
                }
            };
            */

            /*
            $scope.options = {
                chart:{
                    type:   'scatterChart',
                    height: 450,                    
                    useVoronoi: true,
                    forceY: ([0,1000]),
			        forceX: ([0,1000]),
                    forcePoint: [-30],
                    tooltip:{
                        duration: 200,
                        hideDelay: 2000
                    },
                    margin : {
                        top: 20,
                        right: 20,
                        bottom: 60,
                        left: 85,
                        
                    },
                    scatter: {
                    onlyCircles: false
                    },
                    showDistX: true,
                    showDistY: true,
                    duration: 3500,
                    xAxis: {
                    axisLabel: "Maximum Cost"
                    },
                    yAxis: {
                    axisLabel: "Maximum Benefit",
                    axisLabelDistance: -5
                    },
                    "zoom": {
                    "enabled": true,
                    "scaleExtent": [
                        1,
                        10
                    ],
                    "useFixedDomain": false,
                    "useNiceScale": false,
                    "horizontalOff": false,
                    "verticalOff": false,
                    "unzoomEventType": "dblclick.zoom"
                    }
                    
                }
            }
*/
            }, function(err){
            console.log('err:' + err);
        });

        /*/


        /*
        $scope.projectObjects = ProjectObjects.query();
        $scope.projectObjects.$promise.then(function (result){
           console.log(result);
        } );
        */
        //console.log(ProjectObjects.query());
        //console.log($scope.projectObjects);

    }
]);

