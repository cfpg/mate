ExpensesController = RouteController.extend({
  subscriptions: function () {
    this.subscribe('expenses');
  },

  data: function () {
    // return a global data context like this:
    // Items.findOne({_id: this.params._id});
  },

  ExpensesList: function () {
    this.render('ExpensesList', {});
  }
});
