angular.module('TaxTableSrv', []).service('TaxTableSrv', [ function(){

	var service = {
		_taxTable: [
			{'rangeStart': 0, 'rangeEnd': 18200, 'baseTax':0, 'taxEachDollar': 0, 'threshhold': 0},
			{'rangeStart': 18201, 'rangeEnd': 37000, 'baseTax':0, 'taxEachDollar': 0.19, 'threshhold': 18200},
			{'rangeStart': 37001, 'rangeEnd': 80000, 'baseTax':3572, 'taxEachDollar': 0.325, 'threshhold': 37000},
			{'rangeStart': 80001, 'rangeEnd': 180000, 'baseTax':17547, 'taxEachDollar': 0.37, 'threshhold': 80000},
			{'rangeStart': 180001, 'rangeEnd': 1000000, 'baseTax':54547, 'taxEachDollar': 0.45, 'threshhold': 180000}
		],
		getTaxTable: function(){
			return this._taxTable;
		},
		calcAmount: function(salary, superRate){
			var taxBracket = this.findTaxBracket(salary);
			var grossIncome = salary/12;
			var incomeTax = (taxBracket[0].baseTax + (salary - taxBracket[0].threshhold) * taxBracket[0].taxEachDollar) / 12;
			var netIncome = grossIncome - incomeTax;
			var _super = grossIncome * superRate / 100;

			return results = {
				grossIncome: grossIncome,
				incomeTax: incomeTax,
				netIncome: netIncome,
				super: _super
			};
			
		},
		findTaxBracket: function(salary){
			return this._taxTable.filter(function(bracket){
				return (bracket.rangeStart <= salary && bracket.rangeEnd >= salary);
			})
		}
	}

	return service
}]);
