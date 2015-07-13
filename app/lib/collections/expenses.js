Expenses = new Mongo.Collection('expenses');


if (Meteor.isServer) {
  Expenses.allow({
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
	
	Expenses.attachSchema(new SimpleSchema({
		'subject':{
			type:String,
			label:'Subject',
			max: 255
		},
		'amount':{
			type:Number,
			label:'Amount'
		},
		'payer':{
			type:Number,
			label:'Payer',
			allowedValues:['1', '2', '3', '4']
		}
	}));
}
