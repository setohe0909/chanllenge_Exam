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
    $scope.updateMatriz = function(){
    	for (var iMat = 0; updateArray.length > iMat; iMat++)
		    updateArray[iMat][index] += value;
		return $scope.arr = updateArray;
    };
    $scope.sumDatos = function(){
    	var sum = 0;
    	var updateArray = $scope.arr;

    	for (var iMat = 0; updateArray.length > iMat; iMat++){
    		if (updateArray[iMat][index] > 0)
		    	sum += updateArray[iMat][index];
    	}

		return $scope.sumatoria = sum;
    };
    $scope.sumDatoscord = function(){
    	var total = 0;
        var init = parseInt($scope.init);
    	var end = parseInt($scope.end);

    	for (var iMat = 0; updateArray.length > iMat; iMat++){
    		if (updateArray[iMat][init] > 0)
    			sum += updateArray[iMat][init] + updateArray[iMat][end];
    	}

		return $scope.sumatoria = sum;
    }
  });
