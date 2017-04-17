KEYSModulo.controller('KEYSController', function (KEYSService, $scope) {
    $scope.adms = [];

    $scope.cadastrarAdm = function () {
        
        KEYSService.cadastrarAdm($scope.adm)
            .then(function (response) {
                // Chamado quando a resposta contém status de sucesso.
                // Exibir no console o conteúdo da resposta.
                console.log(response.data);
                
                // Criar adm com o dado (Json) de resposta do servidor.
                var adm = response.data;
                $scope.adms.push(adm);                
            });
        
    };
});
