angular.module('taxTable', []).directive('taxTable', ['calcTaxSrv', function(calcTaxSrv){
	return {
		restrict: 'E',
		controller: function($scope){
			$scope.calcTax = function(){
				calcTaxSrv.calcAmount($scope.sal, $scope.sup).$promise.then(function(response){
					if(response.error){
						$scope.errorMessage = response.error;

					}else{
						$scope.summary = response.data
						
					}
				})
			}
		},
		template: 	'<h4>Income tax calculations</h4>'+

					'<input type="text" ng-model="sal" placeholder="Salary" /> <br />'+
					'<input type="text" ng-model="sup" placeholder="Super" /> <br />'+
					'<button ng-click="calcTax()">Calculate</button>'+
					'<ul>'+
						'<li><p class="success">Gross Income: ${{summary.grossIncome}}</p></li>'+
						'<li><p class="success">Income Tax: ${{summary.incomeTax}}</p></li>'+
						'<li><p class="success">Net Income: ${{summary.netIncome}}</p></li>'+
						'<li><p class="success">Super: ${{summary.super}}</p></li>'+
					'</ul>'+
					'<p class="error">{{errorMessage}}</p>'
	}
}]);