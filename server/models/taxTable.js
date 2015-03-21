// Tax Table model

var validate = require('./taxValidation');

var model = {

	/**
	*	Some static data fro tax table
	*
	*/
	_fixture: [
			{'rangeStart': 0, 'rangeEnd': 18200, 'baseTax':0, 'taxEachDollar': 0, 'threshhold': 0},
			{'rangeStart': 18201, 'rangeEnd': 37000, 'baseTax':0, 'taxEachDollar': 0.19, 'threshhold': 18200},
			{'rangeStart': 37001, 'rangeEnd': 80000, 'baseTax':3572, 'taxEachDollar': 0.325, 'threshhold': 37000},
			{'rangeStart': 80001, 'rangeEnd': 180000, 'baseTax':17547, 'taxEachDollar': 0.37, 'threshhold': 80000},
			{'rangeStart': 180001, 'rangeEnd': 1000000, 'baseTax':54547, 'taxEachDollar': 0.45, 'threshhold': 180000}
	],

	/**
	*	Given a slary returns a tax bracket as a context for tax calculations.
	*	first value returned error
	*	second value returned is tax bracket
	*/
	findTaxBracket: function(salary, callback){
		var self = this;

		if(!validate.salary(salary).valid){
			callback(
				validate.salary(salary).message,
				null
			);

		}else{

			callback(
				null,
				self._fixture.filter(function(bracket){
					return (bracket.rangeStart <= salary && bracket.rangeEnd >= salary);
				})[0]
			)

		}
	}

};

module.exports = model;