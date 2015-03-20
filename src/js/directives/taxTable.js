angular.module('taxTable', []).directive('taxTable', ['TaxTableSrv', function(TaxTableSrv){
	return {
		retrict: 'E',
		controller: function($scope){
			$scope.summary = TaxTableSrv.calcAmount(60050);
		},
		template: 'income Tax {{summary.incomeTax}}'
	}
}]);