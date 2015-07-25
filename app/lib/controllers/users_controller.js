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
		var user = Meteor.user();
		if(Meteor.user()){
		    Meteor.subscribe('currentUser');
		}
		var owed = user.rent;
		var expenses = Expenses.find({
			"user._id": Meteor.userId()
		}).fetch();
		var totalTransactions = 0;
		var totalExpenses = 0;
		
		_.each(expenses, function(itm,n) {
			totalTransactions = totalTransactions + 1;
			totalExpenses = totalExpenses + itm.amount;
		});
		
		owed = owed - (totalExpenses / 3);
		
		return {
			expenses: expenses,
			owed: owed,
			totalExpenses: totalExpenses,
			totalTransactions: totalTransactions,
			user: Meteor.user()
		};
		
  },

  usersHome: function () {
    this.render('Users', {});
  },
	
	usersProfile: function () {
		console.log(this.params)
		var currentUser = Meteor.users.findOne({
			_id: this.params._id
		});
		currentUser.email = currentUser.emails[0].address;
		console.log(currentUser);
		var expenses = Expenses.find({
			_id: this.params._id
		});
		this.render('UsersProfile')
	},
	
	userRent: function() {
		this.render('UserRent');
	},
	
	userRentPost: function(userRent) {
		console.log('User rent post!');
		console.log(userRent);
		if (!userRent) return false;
	}
});

Meteor.users.allow({
  update: function(userId, user){
    return user._id == userId;
  },
  insert: function(user){
  	return true;
  }
});