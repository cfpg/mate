if (Meteor.isClient) {
	Meteor.startup(function () {
		
		sAlert.config({
			effect: '',
			position: 'bottom-right',
			timeout: 3000,
			html: false,
			onRouteClose: true,
			stack: true,
			offset: 0
		});
		
	});
}