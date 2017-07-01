/**
 * criado em 30/05/2017
 */

var moduloPrincipal = angular.module('starter');

moduloPrincipal.controller('ListagemController', function($scope) {

    $scope.listaDeCarros = [ {
	nome : "BMW 120i",
	preco : 100000.00
    }, {
	nome : "Onix 1.6",
	preco : 50000
    }, {
	nome : "Uno Fire",
	preco : 30000
    }, {
	nome : "Sentra 2.0",
	preco : 82000
    }, {
	nome : "Fusca 1500",
	preco : 973000
    } 
    ];
    // "Fiesta 2.0", "C3 1.0", "Uno Fire", "Sentra 2.0", "Astra Sedan",
    // "Vectra 2.0 Turbo", "Hilux 4x4", "Montana Cabine dupla", "Outlander 2.4",
    // "Fusca 1500"

});

moduloPrincipal.controller('CarroEscolhidoController', function($scope, $stateParams) {

    $scope.carroEscolhido = angular.fromJson($stateParams.carro);
    
    $scope.listaDeAcessorios = [
	{nome: "Ar Condicionado", preco: 4000.50},
	{nome: "Freio ABS", preco: 6538.79},
	{nome: "Banco de Couro", preco: 9470.23}
    ];
    
    $scope.opcaoAcessorioClicado = function(acessorio, isMarcado) {
	if (isMarcado) {
	    $scope.carroEscolhido.preco += acessorio.preco;
	} else {
	    $scope.carroEscolhido.preco -= acessorio.preco;
	}
    }

});


moduloPrincipal.controller('FinalizarPedidoController', function($stateParams, $scope) {
    
    $scope.carroFinalizado = angular.fromJson($stateParams.carro);
    
	
})
