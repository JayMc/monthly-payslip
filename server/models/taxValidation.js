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
			var msg = 'illegal super rate type: requires Number';
			return {valid: false, message: msg};

		}else if(superRate < 0 || superRate > 50){
			var msg = 'illegal super rate amount: must be between 0 and 50';
			return {valid: false, message: msg};

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
			var msg = 'illegal salary type: requires Number';
			return {valid: false, message: msg};

		}else if(salary < 0){
			var msg = 'illegal salary amount: must be above 0';
			return {valid: false, message: msg};

		}else{
			return {valid: true, message:'success'};
		}
	}

};

module.exports = model;