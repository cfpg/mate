Template.ManageHome.events({
	'submit #CreateHomeForm': function(e) {
		e.preventDefault();
		
		var createHomeAddress = $(e.target).find('#createHomeAddress').val();
		var home = Home.findOne();
		
		if (!createHomeAddress) {
			sAlert.error('Please specify an address');
		}
		
		if (!_.isObject(home)) {
			var ins = Home.insert({address : createHomeAddress});
		} else {
			var ins = Home.update(home._id, {
				'$set' : {
					address : createHomeAddress
				}
			});
		}
		
		if (ins) {
			sAlert.success('Home updated!');
		} else {
			sAlert.error('Home did not update');
		}
	},
	'submit #AddUserHome' : function(e) {
		e.preventDefault();
		
		var home = Home.findOne();
		var userId = $(e.target).find('.addUserSelect').val();
		var user = Meteor.users.findOne(userId);
		Meteor.users.update(userId, {
			'$set' : {
				'profile.home' : home._id
			}
		})
	}
});

Template.ManageHome.helpers({
	usersAtHome: function() {
		var home = Home.findOne();
		
		if (!home) {
			return false;
		}
		
		return Meteor.users.find({
			home: home._id
		}).fetch();
	}
});