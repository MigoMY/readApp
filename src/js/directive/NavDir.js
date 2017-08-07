/**
 * Created by Administrator on 2017/6/22.
 */
angular.module('app').directive('navs',function () {

    return {
        restrict:'EA',
        templateUrl:'../views/nav_tpl.html',
        link:function ($scope,ele,attr) {

            /*监听标题改变的通知*/
            $scope.$on('titleChange',function (e,args) {
                var title = args.title;
                ele.find('span').html(title);

            });

            /*控制器返回按钮是否隐藏*/
            if (attr.isBack != "true"){
                ele.find('em').css({
                    'display':'none'
                })
            }

            
        }
    }
});
