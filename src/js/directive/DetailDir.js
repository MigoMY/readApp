/**
 * Created by Administrator on 2017/6/22.
 */
angular.module('app').directive('detail',function () {

    return {
        restrict:'EA',
        template:'<div class="list_detail"></div>',
        link:function ($scope,ele,attr) {
            ele.html(attr.content);
        }
    }
});
