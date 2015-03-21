// Validation model

var model = {

	/**
	*	Validate super rate
	*	returns an object{
	*		valid: //if super rate is valid,
	*		message: //to explain what it is not valid
	*	}	*	
	*/
	superRate: function(superRate){
		if(typeof superRate !== 'number'){
			return {valid: false, message:'illegal super rate type: requires Number'};
		}else if(superRate < 0 || superRate > 100){
			return {valid: false, message:'illegal super rate amount: must be between 0 and 100'};
		}else{
			return {valid: true, message:'success'};
		}
	},

	/**
	*	Validate salary
	*	returns an object{
	*		valid: //if salary is a valid salary,
	*		message: //to explain why the salary was invalid
	*	}
	*/
	salary: function(salary){
		if(typeof salary !== 'number'){
			return {valid: false, message:'illegal salary type: requires Number'};
		}else if(salary < 0){
			return {valid: false, message:'illegal salary amount: must be above 0'};
		}else{
			return {valid: true, message:'success'};
		}
	}

};

module.exports = model;