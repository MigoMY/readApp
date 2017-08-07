/**
 * Created by Administrator on 2017/6/22.
 */

angular.module('app').config(['$stateProvider','$urlRouterProvider',
    function ($stateProvider,$urlRouterProvider) {

    $stateProvider.state('app',{
       url:'/app',
        views:{
           home:{
               templateUrl:'../views/home_tpl.html',
               controller:'HomeController'
           },
            author:{
                template:'<h1>author</h1>'
            },
            content:{
                template:'<h1>content</h1>'
            },
            my:{
                template:'<h1>my</h1>'
            }
        }
    });
    $urlRouterProvider.otherwise('app/index');
}]);



angular.module('app').config(['$stateProvider',function ($stateProvider) {
    //配置主路由
    $stateProvider.state('app.index',{
        url:'/index',
        template:'<list></list>'
    });

}]);

angular.module('app').config(['$stateProvider',function ($stateProvider) {
    //配置主路由
    $stateProvider.state('app.detail',{
        url:'/detail/:id',
        controller:'DetailController',
        template:'<detail content="{{content}}"></detail>'
    });

}]);







