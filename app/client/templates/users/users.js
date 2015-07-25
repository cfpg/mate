/*****************************************************************************/
/* Users: Event Handlers */
/*****************************************************************************/
Template.Users.events({
	'click #AddRent':function(e){
		e.preventDefault();
		Router.go('/user/rent');
	}
});

/*****************************************************************************/
/* Users: Helpers */
/*****************************************************************************/
Template.Users.helpers({
	userInfo:function(){
		console.log(name);
		var name = 'jaha'
	},
});

/*****************************************************************************/
/* Users: Lifecycle Hooks */
/*****************************************************************************/
Template.Users.created = function () {
};

Template.Users.rendered = function () {
	
};

Template.Users.destroyed = function () {
};
