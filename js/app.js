var myApp = angular.module('myApp', ['ngRoute', 'pascalprecht.translate'])
    .config(function($routeProvider){
        $routeProvider.when('/',
        {
            templateUrl:'views/login.html',
            controller: 'LoginCtrl'
        });
        $routeProvider.when('/main',
        {
            templateUrl:'views/main.html',
            controller: 'HomeCtrl'
        });
        $routeProvider.when('/login',
        {
            templateUrl:'views/login.html',
            controller: 'LoginCtrl'
        });

});

myApp.config(function ($translateProvider) {
  // Английский
  $translateProvider.translations('en', {
    IMAGE:"images/United-Kingdom-icon.png",
    LOGIN:"Login",
    PASS:"Password",
    SUBMIT:"SUBMIT",
    LOGOUT:"LOGOUT",
    WELCOME:"Welcome",
    CONGRATULATION:"CONGRATULATION!"
  });
  // Русский
  $translateProvider.translations('ru', {
    IMAGE:"images/Russia-icon.png",
    LOGIN:"Логин",
    PASS:"Пароль",
    SUBMIT:"Авторизация",
    LOGOUT:"Назад",
    WELCOME:"Добро пожаловать",
    CONGRATULATION:"ПОЗДРАВЛЯЕМ!"
  });
  $translateProvider.preferredLanguage('en');
});

myApp.controller('mainCtrl', function( $scope, $translate){
  $scope.currentLng = function( lang ) {
    return $translate.use() == lang;
  };
  $scope.changeLng = function( lang ) {
    $translate.use( lang );
  };
  
});

myApp.controller('HomeCtrl', function($scope, $rootScope, $location) {
  $scope.user = $rootScope.username;
  $scope.logout = function() {
    $location.path('/login')
    $rootScope.username = "";
  };
});

myApp.controller('LoginCtrl', function($scope, $rootScope, $location) {
  $scope.login = function() {
    $rootScope.username = $scope.username;
    $location.path('/main')
  };
});
