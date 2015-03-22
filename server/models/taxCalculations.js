// Tax Calculations model

var taxTable = require('./taxTable');
var validate = require('./taxValidation');

var model = {


	calcAmount: function(salary, sr, callback){

		if(!validate.superRate(sr).valid){
			callback(validate.superRate(sr).message, null);
		}else

		if(!validate.salary(salary).valid){
			callback(validate.salary(salary).message, null);

		}else

		if(validate.salary(salary).valid && validate.salary(salary).valid){

			taxTable.findTaxBracket(salary, function(err, taxBracket){
				if(err){
					//bubble up error
					callback(err, null);

				}else{
					var grossIncome = Math.round(salary/12);
					var incomeTax = Math.round((taxBracket.baseTax + (salary - taxBracket.threshhold) * taxBracket.taxEachDollar) / 12);
					var netIncome = grossIncome - incomeTax;
					var _super = Math.round(grossIncome * sr / 100);

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

				
			});

		}else{
			callback('unknown error', null)
		}
	}

};

module.exports = model;