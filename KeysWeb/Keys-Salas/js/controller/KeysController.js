KeysAppModulo.controller('KeysController', function (KeysService,$scope, $state, $mdToast) {

    var TAMANHO_MINIMO_PESQUISA = 3;

    // Select.
    $scope.reservas = []; 
    
    $scope.chaves = [];
     $scope.adm = [];

    $scope.cadastrarChave = function () {

        KeysService.cadastrarChave($scope.chave)
            .then(function (response) {
                // Chamado quando a resposta contém status de sucesso.
                // Exibir toas com mensagem de sucesso ou erro.
                var toast = $mdToast.simple()
                    .textContent('Chave cadastrado(a) com sucesso.')
                    .position('top right')
                    .action('Ok')
                    .hideDelay(6000);
                $mdToast.show(toast);
            })
            .catch(function (data) {
                // Handle error here
                var toast = $mdToast.simple()
                    .textContent('Problema no cadastro da Chave.')
                    .position('top right')
                    .action('Ok')
                    .hideDelay(6000);
                $mdToast.show(toast);
            });
    };

    $scope.listarChave = function () {
        KeysService.listarChave()
            .then(function (response) {
                $scope.chaves = response.data;
            });
    };
    
    $scope.reservarChave = function () {

        KeysService.reservarChave($scope.chave)
            .then(function (response) {
                // Chamado quando a resposta contém status de sucesso.
                // Exibir toas com mensagem de sucesso ou erro.
                var toast = $mdToast.simple()
                    .textContent('Chave Reservada com sucesso.')
                    .position('top right')
                    .action('Ok')
                    .hideDelay(6000);
                $mdToast.show(toast);
            })
            .catch(function (data) {
                // Handle error here
                var toast = $mdToast.simple()
                    .textContent('Problema na Reserva da Chave.')
                    .position('top right')
                    .action('Ok')
                    .hideDelay(6000);
                $mdToast.show(toast);
            });
    };
    
    $scope.listarReserva = function () {
        KeysService.listarReserva()
            .then(function (response) {
                $scope.reservas = response.data;
            });
    };

    $scope.loginAdm = function () {

        KeysService.loginAdm($scope.adm)
            .then(function (response) {
                // Chamado quando a resposta contém status de sucesso.
                // Exibir toas com mensagem de sucesso ou erro.
                var toast = $mdToast.simple()
                    .textContent('Login Realizado com sucesso.')
                    .position('top right')
                    .action('Ok')
                    .hideDelay(6000);
                $mdToast.show(toast);
            })
            .catch(function (data) {
                // Handle error here
                var toast = $mdToast.simple()
                    .textContent('Problema no Login.')
                    .position('top right')
                    .action('Ok')
                    .hideDelay(6000);
                $mdToast.show(toast);
            });
    };
