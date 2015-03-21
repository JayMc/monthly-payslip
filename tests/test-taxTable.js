var should = require('should'),
	assert = require('assert'),	
	request = require('supertest');

var TaxTable = require('../server/models/taxTable.js');

describe('taxTable', function(){
 
	it('it should find a tax bracket', function(done){
		TaxTable.findTaxBracket(60000, function(err, tB){
			(err === null).should.be.true;
			tB.should.be.type('object');
			done();
		})
	})
 
 	it('it should return an error from string salary', function(done){
		TaxTable.findTaxBracket('60000', function(err, tB){
			err.should.be.type('string');
			(tB === null).should.be.true;

			done();
		})
	})
 
 	it('it should return an error from negative salary', function(done){
		TaxTable.findTaxBracket(-60000, function(err, tB){
			err.should.be.type('string');
			(tB === null).should.be.true;

			done();
		})
	})

});