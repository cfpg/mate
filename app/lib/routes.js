Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'Home',
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

Router.route('/login', {
  name:'Login',
  controller:'LoginController',
  action:'login',
  where:'client'
});

Router.route('/logout', {
  name:'Logout',
  controller:'LoginController',
  action:'logout',
  where:'client'
});

Router.route('/user', {
  name: 'UserHome',
  controller: 'UsersController',
  action: 'usersHome',
  where: 'client'
});

Router.route('/user/rent', {
  name: 'UserRent',
  controller: 'UsersController',
  action: 'userRent',
  where: 'client'
});

Router.route('/users/:_id', {
  name: 'UsersProfile',
  controller: 'UsersController',
  action: 'usersProfile',
  where: 'client'
});

// (Global) Before hooks for any route
var beforeHooks = {
    isLoggedIn: function(pause) {
        if (!(Meteor.loggingIn() || Meteor.user())) {
					if (Router.current().route.getName() == 'Login') {
						this.next();
					}
					var snd = new Audio("http://wavcentral.com/sounds/movies/jurassic/jurass01.mp3");
					var t = 500;
					setInterval(function(){
						// snd.play();
						t = (t/2) - (t/3);
					},500);
          sAlert.error('You need an account for that!', 'Please login');
          Router.go('Login');
        } else {
        	this.next();
        }
    }
}
Router.onBeforeAction(
	beforeHooks.isLoggedIn,{
		except:['login','logout','home']
	}
);