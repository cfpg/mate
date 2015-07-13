Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});

Router.route('/expenses', {
	name:'ExpensesList',
	controller:'ExpensesController',
	action:'list',
	where:'client'
});

Router.route('/expenses/create', {
  name:'ExpensesCreate',
  controller:'ExpensesController',
  action:'create',
  where:'client'
});