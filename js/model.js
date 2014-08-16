var viewModel = {
	firstName: ko.obvservable("init")
	,lastName: ko.obvservable("init")
	,capitalizeLastName:funtion(){
		var current = this.lastName();
		this.lastName(currentVal.toUpperCase());	
	}	
	};
	
	viewModel.fullName = ko.computed(fuction(){
		return this.firstName() + " " +this.lastName();
	},viewModel);
	

	
	
	