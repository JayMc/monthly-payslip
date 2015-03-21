// Validation model

var model = {

	/**
	*	Validate salary
	*	returns an object{
	*		valid: //if salary is a valid salary,
	*		message: //to explain why the salary was invalid
	*	}
	*/
	validateSalary: function(salary){
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