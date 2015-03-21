// Tax Calculations model

var taxTable = require('./taxTable');
var validate = require('./taxValidation');

var model = {


	calcAmount: function(salary, superRate, callback){

		if(!validation.superRate(superRate).valid){
			callback(validate.superRate(superRate).message, null);
		}

		if(!validation.salary(salary).valid){
			callback(validate.salary(salary).message, null);

		}else{
			var taxBracket = taxTable.findTaxBracket(salary);
			var grossIncome = salary/12;
			var incomeTax = (taxBracket[0].baseTax + (salary - taxBracket[0].threshhold) * taxBracket[0].taxEachDollar) / 12;
			var netIncome = grossIncome - incomeTax;
			var _super = grossIncome * superRate / 100;

			callback(
				null,
				{
					grossIncome: grossIncome,
					incomeTax: incomeTax,
					netIncome: netIncome,
					super: _super
				}
			)

		}
	}

};

module.exports = model;