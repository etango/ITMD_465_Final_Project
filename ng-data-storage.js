var app = angular.module('myApp',[]);


app.factory('inventoryFactory',function() {
    var cars = [];
    var myMazdaServices = {};
    
    myMazdaServices.addCar = function(car){
        cars.push(car);
        consolge.log("added succesffuly");
    }
    
    myMazdaServices.removeCar = function(car){
        var index = cars.indexOf(car);
        indexs.splice(index, 1);
    }
    
    myMazdaServices.getInventory = function(){
        return cars;
    }
    
   return myMazdaServices; 
    
});


app.controller('MyCtrl', ['$scope', 'InventoryFactory', function($scope, InventoryFactory){
    init();
    function init(){
        $scope.newCar = {};
        $scope.Inventory = InventoryFactory.getInventory();
    }
}])

