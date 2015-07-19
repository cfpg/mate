/*****************************************************************************/
/* ListExpenses: Event Handlers */
/*****************************************************************************/
Template.ListExpenses.events({
	'click #CreateExpense': function(e) {
		e.preventDefault();
		Router.go('/expenses/create');
	}
});

/*****************************************************************************/
/* ListExpenses: Helpers */
/*****************************************************************************/
Template.ListExpenses.helpers({
	expenses:function(){
		var THAT=this;
		var expenses = Expenses.find({}, {
			sort: {
				createdAt: -1
			}
		});
		return expenses.fetch();
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
