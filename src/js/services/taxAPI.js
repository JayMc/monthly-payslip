angular.module('taxAPI', []).factory('taxAPI', ['$resource', function($resource){

	return $resource('http://localhost:3000/api/',
		{},
		{getTaxbracket: {
			url:'api/get-taxbracket',
			method: 'POST'
		},
		calcSalary:{
			url: 'api/calc-salary',
			method: 'POST'
		}
	})
	
}]);


