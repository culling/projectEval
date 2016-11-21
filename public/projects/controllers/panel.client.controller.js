angular.module('projects').controller('PanelController', function(){
    this.tab = 4;

    this.selectTab = function(setTab){
        this.tab = setTab;
    };

    this.isSelected = function(checkTab){
        return this.tab === checkTab;
    };

});