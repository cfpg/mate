/*****************************************************************************/
/* Users: Event Handlers */
/*****************************************************************************/
Template.User.events({
	'click #AddRent':function(e){
		e.preventDefault();
		Router.go('/user/rent');
	}
});

/*****************************************************************************/
/* Users: Helpers */
/*****************************************************************************/
Template.User.helpers({
	userInfo:function(){
		console.log(name);
		var name = 'jaha'
	},
});

/*****************************************************************************/
/* Users: Lifecycle Hooks */
/*****************************************************************************/
Template.User.created = function () {
};

Template.User.rendered = function () {
	
};

Template.User.destroyed = function () {
};
