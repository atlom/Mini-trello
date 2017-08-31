var app = angular.module("Mini-proyect", ["ngRoute","firebase"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/home",{
        templateUrl: "partials/home-partial.html"
        
    })
    .when("/tablero",{
        templateUrl: "partials/tablero-partial.html",
        controller: "TableroCtrl"  
    })
    .when("/agregarTablero",{
        templateUrl: "partials/agregar-tablero-partial.html",
        controller: "AgregarTableroCtrl"  
    })
    .otherwise({
        redirectTo: "/home"
    });
});

app.constant("FBURL","https://mini-trello-3354a.firebaseio.com/");