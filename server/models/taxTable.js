// TaxTable model

var model = {
	fixture: [
			{'rangeStart': 0, 'rangeEnd': 18200, 'baseTax':0, 'taxEachDollar': 0, 'threshhold': 0},
			{'rangeStart': 18201, 'rangeEnd': 37000, 'baseTax':0, 'taxEachDollar': 0.19, 'threshhold': 18200},
			{'rangeStart': 37001, 'rangeEnd': 80000, 'baseTax':3572, 'taxEachDollar': 0.325, 'threshhold': 37000},
			{'rangeStart': 80001, 'rangeEnd': 180000, 'baseTax':17547, 'taxEachDollar': 0.37, 'threshhold': 80000},
			{'rangeStart': 180001, 'rangeEnd': 1000000, 'baseTax':54547, 'taxEachDollar': 0.45, 'threshhold': 180000}
	],
	findTaxBracket: function(salary){
		return this.fixture.filter(function(bracket){
			return (bracket.rangeStart <= salary && bracket.rangeEnd >= salary);
		})
	}

};

module.exports = model;