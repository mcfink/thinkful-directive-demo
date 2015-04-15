angular.module('thinkfulBasicDirective', [])
	.directive('optIn', function(){
		return{
			restrict: 'E',
			transclude: true,
			templateUrl: "form.html",
			replace: false
		};
	});
