/**
 * criado em 30/05/2017 
 */

var moduloPrincipal = angular.module('starter');

moduloPrincipal.controller(
'ListagemController',
function ($scope) {
    	
    	$scope.listaDeCarros = [
		'BMW 120i',
		'ONIX 1.6',
		'Fiesta 2.0',
		'C3 1.0',
		'Uno Fire',
		'Sentra 2.0',
		'Astra Sedan',
		'Vectra 2.0',
		'Hilux 4x4',
		'Montana Cabine dupla',	
		'Outlander 2.4',  
		'Fusca 1500'];
    	$scope.data = '01/10/2016';
}
	
	

)
