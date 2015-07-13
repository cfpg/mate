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

Router.route('/expenses/new', {
	name:'ExpensesNew',
	controller:'ExpensesController',
	action:'insert',
	where:'client'
});
