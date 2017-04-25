var app = angular.module("index", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

    $stateProvider.state('login',{
        url:'/login',
        templateUrl: 'login.html',
        controller: 'loginCtrl',
        data:{
            title: "Login"
        }

    // }).state('signup',{
    //     url:'/signup',
    //     templateUrl: 'register.html',
    //     controller: 'registerUser',
    //     data:{
    //         title: "Signup"
    //     }
    //
    // }).state('registervehicle',{
    //     url:'/registervehicle',
    //     templateUrl: 'registervehicle.html',
    //     controller: 'registerVehicle',
    //     data:{
    //         title: "RegisterVehicle"
    //     }
    //
    // }).state('home',{
    //     url:'/home',
    //     templateUrl: 'home.html',
    //     controller: 'homeCtrl',
    //     data:{
    //         title: "home"
    //     }

    });

    $urlRouterProvider.otherwise('');

});

app.constant('serverUrl', 'https://noonelivesecurity.herokuapp.com');
