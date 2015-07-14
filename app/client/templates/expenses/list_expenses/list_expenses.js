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
		var THAT=this;
		var payee = [{name: 'Konrad'}, {name: 'Roemer'}, {name: 'Ricky'}, {name: 'Carlos'}];
		var expenses = Expenses.find().fetch();
		console.log(expenses)
		return expenses;
	},
	payee: [{name: 'Konrad'}, {name: 'Roemer'}, {name: 'Ricky'}, {name: 'Carlos'}],
	user:function(){
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
