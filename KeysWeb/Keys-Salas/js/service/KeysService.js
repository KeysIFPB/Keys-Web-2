KeysAppModulo.factory("KeysService", function($http) {

    var urlBase = "http://localhost:8080/RestEasyApp";
    
    var _listarChave = function() {
        return $http.get(urlBase + "/chave/listar/")
    };
    
    var _cadastrarChave = function(Chave){
		return $http.post(urlBase + "/chave/cadastrar", Chave)
	};
    
    var _reservarChave = function(Chave){
		return $http.post(urlBase + "/reserva/reservar/",Chave)
	};
    
    var _listarReserva = function() {
        return $http.get(urlBase + "/reserva/listar/")
    };

    return {
        listarAlunos: _listarAlunos,
        cadastrarAluno: _cadastrarAluno,
        consultarAlunoByNome: _consultarAlunoByNome
    };
});