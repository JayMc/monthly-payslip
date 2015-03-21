
var TaxTable = require('./models/taxTable');

var urlPrefix = '/api';

module.exports = function(app, express){


	app.get(urlPrefix+'/tax-tables', function(req,res){
		return res.json(TaxTable.fixture);
	})

	app.get(urlPrefix+'/tax-tables/get-bracket/:salary', function(req,res){

		TaxTable.findTaxBracket(Number(req.params.salary), function(err, taxBracket){
			return res.json({
				data: taxBracket,
				error: err
			})
		})
		
	})

	app.get(urlPrefix+'/calc-salary/:period/:salary', function(req,res){
		return res.json(TaxTable.findTaxBracket(req.params.salary));
	})	

	app.use('/', express.static('public'));
}