HomeController = RouteController.extend({
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
		if (Meteor.isServer) {
			Meteor.publish('theHouse', function() {
				return Home.findOne();
			});
			
			Meteor.publish('theAddress', function() {
				return Home.findOne().address;
			})
			
			Meteor.publish('theRenters', function() {
				return Meteor.users.find({
					address: Home.findOne().address
				}).fetch();
			});
		}
		
		if (Meteor.isClient) {
			Meteor.subscribe('theHouse');
			Meteor.subscribe('theAddress');
			Meteor.subscribe('theRenters');
			
			// Fetch current Home, at the moment only a single house is supported so findOne() with no arguments works
			var currentHome = {};
			currentHome = Home.findOne();
			
			// Fetch users that belong to this house
			if (currentHome) {
				var renters = Meteor.users.find({
					'profile.home' : currentHome._id
				}).fetch();
			}
			
			return {
				currentHome : Home.findOne(),
				renters : renters,
				users : Meteor.users.find()
			}
		}
  },

  manageHome: function () {
    this.render('ManageHome', {});
  }
});
