var should = require('should'),
	assert = require('assert'),	
	request = require('supertest');

var validate = require('../server/models/taxValidation');

describe('validation', function(){
 
 	//Salary
	it('it should validate true on a real Salary', function(done){

		var response = validate.salary(60000);
			response.should.be.type('object');
			response.valid.should.be.true;
			response.message.should.be.type('string');
			done();
	})

	it('it should validate false on a Salary as  string', function(done){

		var response = validate.salary('60000');
			response.should.be.type('object');
			response.valid.should.be.false;
			response.message.should.be.type('string');
			done();
	})	
 
	it('it should validate false on a Salary as a negative number', function(done){

		var response = validate.salary(-60000);
			response.should.be.type('object');
			response.valid.should.be.false;
			response.message.should.be.type('string');
			done();
	})	

	//Super rate
	it('it should validate true on a real Super rate', function(done){

		var response = validate.superRate(9);
			response.should.be.type('object');
			response.valid.should.be.true;
			response.message.should.be.type('string');
			done();
	})

	it('it should validate false on an illegal Super rate percentage', function(done){

		var response = validate.superRate(110);
			response.should.be.type('object');
			response.valid.should.be.false;
			response.message.should.be.type('string');
			done();
	})

	it('it should validate false on an illegal Super rate as string', function(done){

		var response = validate.superRate('13');
			response.should.be.type('object');
			response.valid.should.be.false;
			response.message.should.be.type('string');
			done();
	})

});