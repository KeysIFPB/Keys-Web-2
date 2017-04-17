KEYSModulo.factory("KEYSService", function($http) {

    var urlBase = "http://localhost:8080/Keys_Service";
    
      var _cadastrarAdm = function(adm){
		return $http.post(urlBase + "/adm/cadastrar", adm)
	};
    
     return {
        cadastrarAdm: _cadastrarAdm
    };

});
