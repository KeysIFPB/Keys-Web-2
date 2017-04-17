angulaAppModulo.config(function ($stateProvider, $urlRouterProvider) {
    
    // Rota padrão.
    $urlRouterProvider.otherwise("/");
    
    // Estados
    $stateProvider
        .state('keys', {
            url: '/',
            templateUrl: 'keys.html'
        })
        
        .state('salas', {
            url: '/keys/salas',
            templateUrl: 'salas.html'
        })
      .state('cadastrarsalas', {
            url: '/adm/cadastrarsalas',
            templateUrl: 'cadastrarsalas.html'
        })
      .state('fazerreserva', {
            url: '/adm/fazerreserva',
            templateUrl: 'fazerreserva.html'
        })
      .state('listarsalas', {
            url: '/adm/listarsalas',
            templateUrl: 'listarsalas.html'
        })
    .state('listarreservas', {
            url: '/adm/listarreservas',
            templateUrl: 'listarreservas.html'
        })
    
});