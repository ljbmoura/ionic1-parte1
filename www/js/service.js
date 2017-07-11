/**
 * serviços padrão AngularJS
 */
var moduloPrincipal = angular.module('starter');

moduloPrincipal.service('CarroService', function($http) {

    var url = 'http://aluracar.herokuapp.com/';

    return {
	obterCarros : function() {
	    return $http.get(url).then(function(listaCarros) {
		// console.debug(listaCarros.data);
		return listaCarros.data;
	    }, function(reason) {
		console.log('Erro GET ' + url + ' : ' + reason.statusText);
	    })
	}

	,
	salvarPedido : function(pedido) {
	    return $http.get(url + 'salvarpedido', pedido).then(function(sucesso) {
		console.debug('status resposta: ' + sucesso.status);
		console.debug(sucesso.data);
		console.log('pedido acolhido com sucesso!');
		return sucesso.data.carro.nome;
	    }
//	    , function(falha) {
//		console.debug(falha);
//		console.debug('status resposta: ' + falha.status);
//		console.debug(falha.data);
//		console.log('Erro GET '+ url + 'salvarpedido');
//		return 'falhou';
//	    }
	    )

	}
    }

})