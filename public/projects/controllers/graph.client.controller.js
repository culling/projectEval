angular.module('projects').controller('GraphController', [ '$scope', '$filter', '$resource','Projects',
    function($scope, $filter, $resource, Projects){
//http://krispo.github.io/angular-nvd3/#/scatterChart


/*
        d3.json("/api/projects", function(data) {
            //console.log(data);


            
            var chartData = [];
            for (var i = 0 ; i < data.length; i++ ){
                chartData[i] = {
                    key: data[i].projectName,
                    values:  [{
                                 x: data[i].maximumCost,
                                 y: data[i].maximumBenefit,
                                 z: (data[i].maximumBenefit * data[i].maximumBenefit) 
                                }]
                }
                 
                

            };

            console.log(chartData);
            $scope.chartData = chartData;
        });
*/

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




    function filterThing(thing, filter){
        var thingValues = Object.values(thing);
        if (filter.toString().length == 0){
            return true;
        }
        for (var i = 0; i< thingValues.length; i++){
            if(thingValues[i].toString().toUpperCase().includes(filter.toUpperCase())){
                return true;
            }
            //console.log(projectValues[i].toString().includes(filter));
            //console.log(projectValues[i].toString() + " "+ filter);
        }
        return false;
    };

   function checkProject(project){
        var queryValue = (document.getElementById("search").value);
        return filterThing(project, queryValue)
    };

   nv.utils.symbolMap.set('thin-x', function(size) {
        size = Math.sqrt(size);
        return 'M' + (-size/2) + ',' + (-size/2) +
                'l' + size + ',' + size +
                'm0,' + -(size) +
                'l' + (-size) + ',' + size;
    });	
	
	//var projectsProjectsByTheme;


    function chartIt(){
        d3.json("/api/projects", function(data) {
        //console.log(data);

            data = data.filter(checkProject);
            
            var cd = [];
            for (var i = 0 ; i < data.length; i++ ){
                cd[i] = {
                    key: data[i].projectName,
                    values:  [{
                                    x: data[i].maximumCost,
                                    y: data[i].maximumBenefit,
                                    z: (data[i].maximumBenefit * data[i].maximumBenefit) 
                                }]
                };
            }
        
                
            var chart;
            nv.addGraph(function() {
                var chart = nv.models.scatterChart()
                    .margin({top: 20, right: 20, bottom: 20, left: 20})
                    .pointSize(function(d) { return d.z })
                    .useVoronoi(true)
                    .forceY([0,10])
                    .forceX([0,10]);

                
                d3.select('#d3Chart')
                    .datum(cd)
                    .transition().duration(500)
                    .call(chart);
                nv.utils.windowResize(chart.update);
                
                
                return chart;
            });


        });
        }

    window.onload = (function(){
        chartIt()
    });
    
	
    document.getElementById('search').oninput = chartIt
