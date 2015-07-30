'use strict';

/**
 * @ngdoc function
 * @name challengeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the challengeApp
 */
angular.module('challengeApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.newMatriz = function(){
		$scope.newArray =
			$scope.createMatriz(parseInt($scope.dimension), parseInt($scope.dimension));
  	};
    $scope.createMatriz = function(){
    	var matriz, len, i;
	    if( arguments.length > 0) {
	        len = [].slice.call( arguments, 0, 1)[0];
	        matriz = new Array(len);
	        for(i = 0; i < len; i++) {
	           matriz[i] = $scope.createMatriz.apply(null, [].slice.call( arguments, 1));
	        }
	    } else return 0;
    	return $scope.arr = matriz;
    };
  });
