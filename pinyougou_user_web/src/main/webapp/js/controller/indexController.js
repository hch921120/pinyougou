app.controller("indexController",function ($scope,loginService) {
    //加载登录用户信息
    $scope.showUserInfo=function () {
        loginService.showUserInfo().success(function (response) {
            $scope.loginUserName = response.username;
        })
    }
})