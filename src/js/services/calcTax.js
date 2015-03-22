angular.module('calcTaxSrv', []).service('calcTaxSrv', ['taxAPI', function(taxAPI){


	var service = {
		calcAmount: function(salary, superRate){

			/**
			*	Calculations are performed serverside 
			*	This method returns a promise which can be resolved where it is used
			*/
			return taxAPI.calcSalary({salary: salary, superRate: superRate});	
			
		}
	}

	return service
}]);
