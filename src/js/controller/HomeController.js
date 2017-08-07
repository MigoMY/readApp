/**
 * Created by Administrator on 2017/6/22.
 */
angular.module('app').
controller('HomeController',['$scope','xmgHttp',function ($scope,xmgHttp) {

   xmgHttp.getData(function (res) {
       $scope.listData = res;
       console.log(res);
   },function (error) {
        alert('请求失败');
   });

}]);