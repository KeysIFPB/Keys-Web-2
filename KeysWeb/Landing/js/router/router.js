KEYSModulo.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'index.html'
        })
        .when('/detalhes', {
            templateUrl: 'detalhes.html'
        })
        .when('/elements', {
            templateUrl: 'elements.html'
        });
});
