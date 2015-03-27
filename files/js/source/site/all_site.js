$(window).load(function(){
	
    $('select').material_select();
	$('.cropper-container > img').cropper({
		aspectRatio: 16 / 9,
		crop: function(data) {
		  // Output the result data for cropping image.
		}
	});	
})

//angular stuff 
var cropApp = angular.module('cropper', []);


cropApp.controller('CropController',['$scope', '$timeout', function($scope, $timeout) {
  	$scope.options = {};
	$scope.options.width = 500;
	$scope.options.height = 500;
	$scope.updateWidth = function(data) {
		console.log(data);
	}
	
	$scope.updateHeight = function(data) {
		console.log(data);
	}
	$scope.downloadImg = function(data) {
		
	}
	
}]);