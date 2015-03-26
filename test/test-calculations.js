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

	it('it should round to whole numbers', function(done){

		taxCal.calcAmount(60050, 9, function(err, taxInfo){
			(err === null).should.be.true;

			(taxInfo.grossIncome % 1).should.be.equal(0);
			(taxInfo.incomeTax % 1).should.be.equal(0);
			(taxInfo.netIncome % 1).should.be.equal(0);
			(taxInfo.super % 1).should.be.equal(0);

			done();
		});
	})

	it('it should calculate tax accurately', function(done){

		taxCal.calcAmount(60050, 9, function(err, taxInfo){
			(err === null).should.be.true;

			taxInfo.grossIncome.should.be.equal(5004);
			taxInfo.incomeTax.should.be.equal(922);
			taxInfo.netIncome.should.be.equal(4082);
			taxInfo.super.should.be.equal(450);

			done();
		});
	})

});