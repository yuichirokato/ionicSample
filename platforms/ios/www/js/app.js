// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.directive'])

    .run(function ($ionicPlatform, $data) {
        var TAG_NAMES = ["swift", "scala", "ios", "android"];
        var QIITA_API_END_POINT = "https://qiita.com/api/v1";
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }

            setTimeout(function () {
                TAG_NAMES.forEach(function (tag) {
                    var apiPath = "/tags/" + tag + "/items";
                    var res = $data.feedRead(QIITA_API_END_POINT + apiPath);
                    res.success(function (data) {
                        window.localStorage.setItem(tag, JSON.stringify(data));
                        if (tag === "android") {
                            navigator.splashscreen.hide();
                        }
                    }).error(function (data, status, heaers, config) {
                        alert('error! statuscode: ' + status);
                    });
                });
            }, 5000);
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })

            // Each tab has its own nav history stack:

            .state('tab.swift', {
                url: '/swift',
                views: {
                    'tab-swift': {
                        templateUrl: 'templates/tab-swift.html',
                        controller: 'SwiftController'
                    }
                }
            })

            .state('tab.scala', {
                url: '/scala',
                views: {
                    'tab-scala': {
                        templateUrl: 'templates/tab-scala.html',
                        controller: 'ScalaController'
                    }
                }
            })

            .state('tab.ios', {
                url: '/ios',
                views: {
                    'tab-ios': {
                        templateUrl: 'templates/tab-ios.html',
                        controller: 'iOSController'
                    }
                }
            })

            .state('tab.android', {
                url: '/android',
                views: {
                    'tab-android': {
                        templateUrl: 'templates/tab-android.html',
                        controller: 'AndroidController'
                    }
                }
            })

            .state('menu.left', {
                url: '/leftmenu',
                views: {
                    'menu-left': {
                        templateUrl: 'templates/menu-left.html',
                        controller: 'LeftMenuController'
                    }
                }
            })

            .state('menu.right', {
                url: '/rightmenu',
                views: {
                    'menu-right': {
                        templateUrl: 'templates/menu-right.html',
                        controller: 'RightMenuController'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/swift');

    });
