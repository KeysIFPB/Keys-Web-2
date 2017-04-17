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
    var _loginAdm = function() {
        return $http.get(urlBase + "/adm/login/")
    };

    return {
        listarChave: _listarChave,
        cadastrarChave: _cadastrarChave,
        listaeReserva: _listarReserva,
        loginAdm: _loginAdm
    };
});