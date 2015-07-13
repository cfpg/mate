ExpensesController = RouteController.extend({
  subscriptions: function () {
    this.subscribe('expenses');
  },

  data: function () {
    // return a global data context like this:
    // Items.findOne({_id: this.params._id});
  },

  list: function () {		
    this.render('ListExpenses', {});
  },

  create: function () {
    this.render('CreateExpense', {});
  }
});
