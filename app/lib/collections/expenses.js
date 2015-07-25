Expenses = new Mongo.Collection('expenses');

if (Meteor.isServer) {
	Meteor.publish("currentUser",
	  function () {
	    return Meteor.users.find(this.userId,
	      {fields: {rent: 1}});
	  }
	);
	
  Expenses.allow({
    insert: function (userId, doc) {
			if (doc.userId != userId) return false;
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
			if (doc.userId != userId) return false;
      return true;
    },

    remove: function (userId, doc) {
			if (doc.userId != userId) return false;
      return true;
    }
  });
	
	var expSchema = new SimpleSchema({
		'subject': {
			type: String,
			label: 'Subject',
			max: 255
		},
		'amount': {
			type: Number,
			label: 'Amount'
		},
		'user': {
			type: Object,
			label: 'User',
			optional: true,
			autoValue:function() {
				var usr = Meteor.user();
				return {
					_id: usr._id,
					username: usr.username,
					email: usr.emails[0].address
				};
			}
		},
		'user._id': {
			type: String,
			label: 'Id'
		},
		'user.username': {
			type: String,
			label: 'Username',
			optional: true
		},
		'user.email': {
			type: String,
			label: 'Email',
			regEx: SimpleSchema.RegEx.Email
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
	expSchema.debug = true;
	
	Expenses.attachSchema(expSchema);
}

if (Meteor.isClient) {
	Template.body.helpers({
		expenses: function() {
			return Expenses.find();
		}
	});
}
