/**
 * Created by Administrator on 2017/6/22.
 */
angular.module('app').
controller('DetailController',['$scope','$stateParams',function ($scope,$stateParams) {

   $scope.item =  $scope.listData[$stateParams.id];
   $scope.content =  $scope.item.content;
    console.log($scope.content);

}]);