LoginController = RouteController.extend({
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
    // return a global data context like this:
    // Items.findOne({_id: this.params._id});
  },

  login: function () {
    this.render('Login',{});
  },
	
	logout: function() {
		Meteor.logout();
		Router.go('ExpensesList');
	}
});
