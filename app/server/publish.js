/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('expenses', function (/* args */) {
  return Expenses.find();
});