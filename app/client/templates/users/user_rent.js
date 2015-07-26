Template.UserRent.events({
	'submit #UserRentForm':function(e){
		e.preventDefault();
		
		var rentInput = parseInt(e.target.userRentInput.value);
		var currentUser = Meteor.users.findOne({_id : Meteor.userId()});
		
		if (!rentInput || isNaN(rentInput)) return false;
		Meteor.users.update(currentUser._id, {
			'$set': {
				'rent' : rentInput
			}
		});
	}
});