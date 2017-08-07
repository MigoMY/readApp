/**
 * Created by Administrator on 2017/6/22.
 */
(function (angular) {
    /*1.创建模块*/
    var app =  angular.module('app',['ui.router']);
    /*2.创建控制器*/
    app.controller('AppController',['$scope','$window',function ($scope,$window) {
        $scope.appTitle = "webApp";

        var title = "首页";
        /*记录当前选中的是哪一个*/
        $scope.type = "home";

        $scope.tabChange = function (type) {
            $scope.type = type;
            switch ( $scope.type){
                case 'home':
                    title = "首页";
                    break;
                case 'author':
                    title = "作者";
                    break;
                case 'content':
                    title = "栏目";
                    break;
                case 'my':
                    title = "我的";
                    break;
            }
            /*发送一个广播给导航，让它改标题*/
            $scope.$broadcast('titleChange',{title:title});
        }


        $scope.back = function () {
          $window.history.back();
        };

    }]);
    /*3.绑定模块*/
    /*4.绑定控制器*/



})(angular);