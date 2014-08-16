var seatReservation = function(name){
		this.name = name;
	}
	
var viewModel = {
	abc: "i am abc",
seats: ko.observableArray([
		new seatReservation("Steve'),
		new seatReservation("Bert")
	])
	
	
	