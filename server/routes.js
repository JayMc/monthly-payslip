
var TaxTable = require('./models/taxTable');
var TaxCalc = require('./models/taxCalculations');

var urlPrefix = '/api';

module.exports = function(app, express){

//Tax tables
	app.get(urlPrefix+'/tax-tables', function(req, res){

		TaxTable.taxTables(function(err, tables){
			return res.json({
				data: tables,
				error: err
			})
		})
	});

//Get tax bracket
	app.post(urlPrefix+'/get-taxbracket', function(req, res){

		if(typeof req.body.salary === 'undefined'){
			return res.json({
				data: {},
				error: 'Please supply Salary'
			});			
		}

		TaxTable.findTaxBracket(
			Number(req.body.salary),
			function(err, taxBracket){

			return res.json({
				data: taxBracket,
				error: err
			})

		})
		
	});

//Calculate tax
	app.post(urlPrefix+'/calc-salary', function(req, res){

		if(typeof req.body.superRate === 'undefined' || typeof req.body.salary === 'undefined'){
			return res.json({
				data: {},
				error: 'Please supply both Salary and Super rate'
			});			
		}

		TaxCalc.calcAmount(
			Number(req.body.salary),
			Number(req.body.superRate),
			function(err, taxInfo){

			return res.json({
				data: taxInfo,
				error: err
			});

		});
	});

//Catch all other requests (serves up HTML etc..)
	app.use('/', express.static('public'));


}