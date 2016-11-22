//http://krispo.github.io/angular-nvd3/#/scatterChart
function filterThing(thing, filter){
    var thingValues = Object.values(thing);
    if (filter.toString().length == 0){
        return true;
    }
    for (var i = 0; i< thingValues.length; i++){
        if(thingValues[i].toString().toUpperCase().includes(filter.toUpperCase())){
            return true;
        }
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


function chartIt(){
    d3.json("/api/projects", function(data) {
        data = data.filter(checkProject);
        var maximumCostMax      = Math.max.apply(null, data.map(function(project){
                return project.maximumCost;
            })
        );
        var maximumBenefitMax   = Math.max.apply(null, data.map(function(project){
            return project.maximumBenefit;
            })
        );

        var maxAxis;
        if (maximumBenefitMax >= maximumCostMax){
            maxAxis = maximumBenefitMax;
        }else {
            maxAxis = maximumCostMax;
        };

        var cd = [];
        for (var i = 0 ; i < data.length; i++ ){
            cd[i] = {
                key: data[i].projectName,
                values:  [{
                                x: data[i].maximumCost,
                                y: data[i].maximumBenefit,
                                z: (data[i].maximumBenefit / data[i].maximumCost) 
                            }]
            };
        }
    
            
        var chart;
        nv.addGraph(function() {
            var chart = nv.models.scatterChart()
                .margin({
                    top: 20,
                    right: 20,
                    bottom: 60,
                    left: 85,    
                })
                .pointSize(function(d) { return d.z })
                .useVoronoi(true)
                .forceY([0,maxAxis])
                .forceX([0,maxAxis]);

            chart.xAxis
                .axisLabel('Cost');

            chart.yAxis
                .axisLabel('Benefit');

            d3.select('#d3Chart')
                .datum(cd)
                .transition().duration(500)
                .call(chart)
            nv.utils.windowResize(chart.update);
 
            return chart;
        });
    });
}

window.onload = (function(){
    chartIt()
});


document.getElementById('search').oninput = chartIt
