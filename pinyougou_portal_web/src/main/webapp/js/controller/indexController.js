app.controller("indexController",function ($scope,contentService) {

    $scope.contentList=[];//广告集合

    //查询广告列表
    $scope.findByCategoryId=function () {
        //查询轮播图
        contentService.findByCategoryId(1).success(function (response) {
            $scope.contentList[1] = response;
        });
    }

    $scope.keywords = "";

    $scope.search=function () {
        if($scope.keywords == ""){
            alert("请输入搜索关键字");
            return;
        }
        window.location.href = "http://localhost:8084/search.html#?keywords=" + $scope.keywords;
    }
})