/**
 * Created by Administrator on 2017/6/22.
 */
angular.module('app')
.config(['$sceDelegateProvider',function ($sceDelegateProvider) {

    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://localhost/api/**'
    ]);

}]);