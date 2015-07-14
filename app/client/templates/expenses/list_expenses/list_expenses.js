/*****************************************************************************/
/* ListExpenses: Event Handlers */
/*****************************************************************************/
Template.ListExpenses.events({
});

/*****************************************************************************/
/* ListExpenses: Helpers */
/*****************************************************************************/
Template.ListExpenses.helpers({
	expenses:function(){
		return [
			{
				subject: 'house rent',
				payee: 'Konrad'
			},
			{
				subject: 'carpet cleaning',
				payee: 'Roemer'
			},
			{
				subject: 'dog poo removal',
				payee: 'Rita'
			},
			{
				subject: 'cleaning lady',
				payee: 'Ricky'
			}
		];
	},
	payee: [{name: 'Konrad'}, {name: 'Roemer'}, {name: 'Ricky'}, {name: 'Carlos'}],
	user:function(){
		console.log(Meteor.user());
		return Meteor.user();
	}
});

/*****************************************************************************/
/* ListExpenses: Lifecycle Hooks */
/*****************************************************************************/
Template.ListExpenses.created = function () {
};

Template.ListExpenses.rendered = function () {
};

Template.ListExpenses.destroyed = function () {
};
