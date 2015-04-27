angular.module('starter.controllers', [])

    .controller('SwiftController', function ($scope, $data) {
        var callApiUrl = "https://qiita.com/api/v1/tags/swift/items";

        var posts = JSON.parse(window.localStorage.getItem("swift"));
        $scope.articles = posts;

        $scope.showArticle = function (index) {
            var article = $scope.articles[index];
            window.open(article.url, '_blank', 'location=no');
        };

        $scope.populateList = function () {
            var res = $data.feedRead(callApiUrl);
            res.success(function (data) {
                $scope.articles = data;
            }).error(function (data, status, header, config) {
                alert('error! status code: ' + status);
            }).finally(function () {
                $scope.$broadcast('scroll.refreshComplete')
            });
        };
    })

    .controller('ScalaController', function ($scope, $data) {
        var callApiUrl = "https://qiita.com/api/v1/tags/scala/items";

        var posts = JSON.parse(window.localStorage.getItem("scala"));
        $scope.articles = posts;

        $scope.showArticle = function (index) {
            var article = $scope.articles[index];
            window.open(article.url, '_blank', 'location=no');
        };

        $scope.populateList = function () {
            var res = $data.feedRead(callApiUrl);
            res.success(function (data) {
                $scope.articles = data;
            }).error(function (data, status, header, config) {
                alert('error! status code: ' + status);
            }).finally(function () {
                $scope.$broadcast('scroll.refreshComplete')
            });
        };
    })

    .controller('iOSController', function ($scope, $data) {
        var callApiUrl = "https://qiita.com/api/v1/tags/ios/items";

        var posts = JSON.parse(window.localStorage.getItem("ios"));
        $scope.articles = posts;

        $scope.showArticle = function (index) {
            var article = $scope.articles[index];
            window.open(article.url, '_blank', 'location=no');
        };

        $scope.populateList = function () {
            var res = $data.feedRead(callApiUrl);
            res.success(function (data) {
                $scope.articles = data;
            }).error(function (data, status, header, config) {
                alert('error! status code: ' + status);
            }).finally(function () {
                $scope.$broadcast('scroll.refreshComplete')
            });
        };
    })

    .controller('AndroidController', function ($scope, $data) {
        var callApiUrl = "https://qiita.com/api/v1/tags/android/items";

        var posts = JSON.parse(window.localStorage.getItem("android"));
        $scope.articles = posts;

        $scope.showArticle = function (index) {
            var article = $scope.articles[index];
            window.open(article.url, '_blank', 'location=no');
        };

        $scope.populateList = function () {
            var res = $data.feedRead(callApiUrl);
            res.success(function (data) {
                $scope.articles = data;
            }).error(function (data, status, header, config) {
                alert('error! status code: ' + status);
            }).finally(function () {
                $scope.$broadcast('scroll.refreshComplete')
            });
        };
    })

    .controller('HomeMenuController', function ($scope) {

    })

    .controller('LeftMenuController', function ($scope) {

    })

    .controller('RightMenuController', function ($scope) {

    });
