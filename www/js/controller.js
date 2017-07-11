/**
 * criado em 30/05/2017
 */

var moduloPrincipal = angular.module('starter');

moduloPrincipal.controller('ListagemController', function($scope, CarroService) {

    CarroService.obterCarros().then(function(carros) {
	$scope.listaDeCarros = carros;
	// }, function(reason) {
	//    	
	// }, function(value) {
	//    	
    });
    /*
     * $scope.listaDeCarros = [ { nome : "BMW 120i", preco : 100000.00 }, { nome :
     * "Onix 1.6", preco : 50000 }, { nome : "Uno Fire", preco : 30000 }, { nome :
     * "Sentra 2.0", preco : 82000 }, { nome : "Fusca 1500", preco : 973000 }
     * ,{nome : "Outlander 2.4", preco : 99000} ];
     */
    /*
     * [{"nome" : "BMW 120i" , "preco" : 70000}, {"nome" : "Onix 1.6" , "preco" :
     * 35000}, {"nome" : "Fiesta 2.0", "preco" : 52000}, {"nome" : "C3 1.0",
     * "preco" : 22000}, {"nome" : "Uno Fire", "preco" : 11000}, {"nome" :
     * "Sentra 2.0", "preco" : 53000}, {"nome" : "Astra Sedan", "preco" :
     * 39000}, {"nome" : "Vectra 2.0", "preco" : 37000}, {"nome" : "Hilux 4x4",
     * "preco" : 90000}, {"nome" : "Montana Cabine dupla", "preco" : 57000},
     * {"nome" : "Outlander 2.4", "preco" : 99000}, {"nome" : "Fusca 15000",
     * "preco" : 6000} ];
     */

});

moduloPrincipal.controller('CarroEscolhidoController', function($scope, $stateParams) {

    $scope.carroEscolhido = angular.fromJson($stateParams.carro);

    $scope.listaDeAcessorios = [ {
	nome : "Ar Condicionado",
	preco : 4000.50
    }, {
	nome : "Freio ABS",
	preco : 6538.79
    }, {
	nome : "Banco de Couro",
	preco : 9470.23
    } ];

    $scope.opcaoAcessorioClicado = function(acessorio, isMarcado) {
	if (isMarcado) {
	    $scope.carroEscolhido.preco += acessorio.preco;
	} else {
	    $scope.carroEscolhido.preco -= acessorio.preco;
	}
    }

});

moduloPrincipal.controller('FinalizarPedidoController', function($stateParams, $scope, $ionicPopup, $state,
	CarroService) {

    $scope.carroFinalizado = angular.fromJson($stateParams.carro);

    $scope.pedido = { nome: 'luciano'
	,endereco: 'endereço', email:'email@email'};

    $scope.finalizarPedido = function() {

	var pedidoCompleto = {
	    params : {
		carro : $scope.carroFinalizado.nome,
		preco : $scope.carroFinalizado.preco,
		nome : $scope.pedido.nome,
		endereco : $scope.pedido.endereco,
		email : $scope.pedido.email
	    }
	};

	CarroService.salvarPedido(pedidoCompleto).then(
	   function(dados) {
	    console.debug(dados);
	    $ionicPopup.alert({
		title : 'Parabéns', // String. The title of the popup.
		template : 'Você acaba de comprar um ' + dados,
		okText : 'Sonho Realizado' // String (default: 'OK').
	    }).then(function() {
		$state.go('listagem');
	    });
	}, function(erro) {
	    console.debug(erro);
	    $ionicPopup.alert({
		title : 'Deu erro',
		template : 'Campos obrigatórios'
	    })
	}
	)
    }
})
