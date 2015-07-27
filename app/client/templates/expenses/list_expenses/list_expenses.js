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


Template.ListExpensesItem.events({
	'click .deleteExpense': function(e) {
		e.preventDefault();
		var del = Expenses.remove({_id: this._id});
		console.log(del);
		
		if (del) {
			sAlert.success('Expense deleted');
		} else {
			sAlert.error('Expense not deleted!');
		}
	}
});

Template.ListExpensesItem.helpers({
	expenseOwner : function() {
		if (Meteor.userId() == this.user._id) {
			return true;
		}
		
		return false;
	}
});