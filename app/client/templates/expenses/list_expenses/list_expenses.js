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
		
		var expenses = Expenses.find().fetch();
		
		return [
			{
				subject: 'house rent'
			},
			{
				subject: 'carpet cleaning'
			},
			{
				subject: 'dog poo removal'
			},
			{
				subject: 'cleaning lady'
			}
		];
	},
	payee: [{name: 'Konrad'}, {name: 'Roemer'}, {name: 'Ricky'}, {name: 'Carlos'}]
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
