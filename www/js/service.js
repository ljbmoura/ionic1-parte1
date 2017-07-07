/**
 * serviços padrão AngularJS 
 */
var moduloPrincipal = angular.module('starter');

moduloPrincipal.service('CarroService', function($http) {
    
    var url = 'http://aluracar.herokuapp.com/';
    
    return {
	obterCarros: function () {
	return $http.get(url).then(function(listaCarros) {
		//console.debug(listaCarros.data);
	    	return listaCarros.data;
	    }, function(reason) {
	    	console.log('Erro GET ' + url + ' : ' + reason.statusText);
	    //}, function(value) {
	    //	
	    })
	}
    }
	
})