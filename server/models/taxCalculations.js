// Tax Calculations model

var validation = require('./taxTable');
var validation = require('./taxValidation');

var model = {


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
	}

};

module.exports = model;