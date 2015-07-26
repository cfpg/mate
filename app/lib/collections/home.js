Home = new Mongo.Collection('home');
if (Meteor.isServer) {	
  Home.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
	
	var homeSchema = new SimpleSchema({
		'address': {
			type: String,
			label: 'Address'
		},
		'createdAt': {
			type: Date,
			label: 'Created at',
			autoValue: function() {
				if (this.isInsert) {
				  return new Date;
				} else if (this.isUpsert) {
				  return {$setOnInsert: new Date};
				} else {
				  this.unset();
				}
			},
			index: 1
		},
		'updatedAt': {
			type: Date,
			label: 'Updated at',
			autoValue: function() {
				return new Date();
			}
		},
	});
	homeSchema.debug = true;
	
	Home.attachSchema(homeSchema);
}
