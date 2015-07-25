/*****************************************************************************/
/* Users: Event Handlers */
/*****************************************************************************/
Template.Users.events({
});

/*****************************************************************************/
/* Users: Helpers */
/*****************************************************************************/
Template.Users.helpers({
	userInfo:function(){
		console.log(name);
		var name = 'jaha'
	}
});

/*****************************************************************************/
/* Users: Lifecycle Hooks */
/*****************************************************************************/
Template.Users.created = function () {
};

Template.Users.rendered = function () {
	console.log(rendered);
};

Template.Users.destroyed = function () {
};
