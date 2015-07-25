if (Meteor.isClient) {

  /*****************************************************************************/
  /* CreateExpense: Event Handlers */
  /*****************************************************************************/
  Template.CreateExpense.events({
    
    'submit form': function(e){
      e.preventDefault();
      
      var $target = $(e.target),
					$subject = $target.find('#expenseSubjectInput'),
					$amount = $target.find('#expenseAmountInput');
	
			var doc = {
        subject: $subject.val(),
				amount: parseInt($amount.val())
      }
      Expenses.insert(doc, function(error, result){
      	if (result) {
					sAlert.success('Success', 'Expense submitted');
				
		      // Clear form
					$subject.val('');
					$amount.val('');
      	} else {
      		sAlert.error('Error!', 'Couldn\'t save that expense...');
					console.error(error);
      	}
      });

    }

  });

  /*****************************************************************************/
  /* CreateExpense: Helpers */
  /*****************************************************************************/
  Template.CreateExpense.helpers({
		
  });

  /****************************************************************************/
  /* CreateExpense: Lifecycle Hooks */
  /*****************************************************************************/
  Template.CreateExpense.created = function () {
		var users = [];
		var Users = Meteor.users.find();
		Users.forEach(function(user) {
			users.push(user);
		});
  };

  Template.CreateExpense.rendered = function () {
    
  };

  Template.CreateExpense.destroyed = function () {
  };

}