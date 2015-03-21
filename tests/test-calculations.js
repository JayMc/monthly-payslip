var should = require('should'),
	assert = require('assert'),	
	request = require('supertest');

var taxCal = require('../server/models/taxCalculations');

describe('calculations', function(){
 
	it('it should calculate tax on a real Salary and super rate', function(done){

		taxCal.calcAmount(78000, 9, function(err, taxInfo){

			(err === null).should.be.true;
			taxInfo.should.be.type('object');
			taxInfo.should.have.property('grossIncome');
			taxInfo.grossIncome.should.be.type('number');

			done();
		});
	})

	it('it should fail on illegal negative super rate', function(done){

		taxCal.calcAmount(82000, -3, function(err, taxInfo){

			(err !== null).should.be.true;
			(taxInfo === null).should.be.true;

			done();
		});
	})

	it('it should fail on illegal string super rate', function(done){

		taxCal.calcAmount(82000, '8', function(err, taxInfo){

			(err !== null).should.be.true;
			(taxInfo === null).should.be.true;

			done();
		});
	})

});