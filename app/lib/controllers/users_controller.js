UsersController = RouteController.extend({
  subscriptions: function () {
    // set up the subscriptions for the route and optionally
    // wait on them like this:
    //
    // this.subscribe('item', this.params._id).wait();
    //
    // "Waiting" on a subscription does not block. Instead,
    // the subscription handle is added to a reactive list
    // and when all items in this list are ready, this.ready()
    // returns true in any of your route functions.
  },

  data: function () {
		var expenses = Expenses.find({
			"user._id": Meteor.userId()
		}).fetch();
		
		var totalTransactions = 0;
		var totalExpenses = 0;
		var owed = 995;
		
		_.each(expenses, function(itm,n) {
			totalTransactions = totalTransactions + 1;
			totalExpenses = totalExpenses + itm.amount;
		});
		
		owed = owed - (totalExpenses / 3);
		
		return {
    	expenses: expenses,
			totalExpenses: totalExpenses,
			totalTransactions: totalTransactions,
			owed: owed
    };
  },

  usersHome: function () {		
    this.render('Users', {});
  },
	
	usersProfile: function () {
		var params = Iron.controller().getParams();
		console.log(params)
		
		var currUser = Meteor.users().find({
			_id: params._id
		}).fetch();
		
		this.render('UsersProfile', {
			currentUser: currUser
		});
	}
});
