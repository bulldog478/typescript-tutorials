import "angular-strap";

let tsApp : ng.IModule = angular.module("tsApp", ["ngAnimate","ngSanitize","mgcrea.ngStrap", "ngRoute"]);
tsApp.config(function($routeProvider:angular.route.IRouteProvider){
    $routeProvider
    .when("/", require("./Home"))
    .otherwise({
        redirectTo:'/'
    });
});

angular.element(document).ready(function(){
    angular.bootstrap(document, ["tsApp"]);
});


