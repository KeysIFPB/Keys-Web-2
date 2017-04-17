angulaAppModulo.config(function ($stateProvider, $urlRouterProvider) {
    
    // Rota padrão.
    $urlRouterProvider.otherwise("/");
    
    // Estados
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'index.html'
        })
        .state("padm", {
            url: '/padm',
            templateUrl: 'padm.html'
        })
        .state('salas', {
            url: '/salas',
            templateUrl: 'salas.html'
        })
		.state('detalhes', {
            url: '/detalhes',
            templateUrl: 'detalhes.html'
        })
});

