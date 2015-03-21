// Tax Table model

var validation = require('./taxValidation');

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

		if(!validation.validateSalary(salary).valid){
			callback(validation.validateSalary(salary).message, null);
		}else{
			callback(
				null,
				self._fixture.filter(function(bracket){
					return (bracket.rangeStart <= salary && bracket.rangeEnd >= salary);
				})
			)
		}
	},

	/**
	*	Validate salary
	*	returns an object{
	*		valid: //if salary is a valid salary,
	*		message: //to explain why the salary was invalid
	*	}
	*/
	_validateSalary: function(salary){
		if(typeof salary !== 'number'){
			return {valid: false, message:'illegal salary type: requires Number'};
		}else if(salary < 0){
			return {valid: false, message:'illegal salary amount: must be above 0'};
		}else{
			return {valid: true, message:''};
		}
	}

};

module.exports = model;