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
			console.log(doc)
      var ins = Expenses.insert(doc, function(error, result){
      	if (result) {
					console.log('result',result)
					Notifications.success('Success', 'Expense submitted');
				
		      // Clear form
					$subject.val('');
					$amount.val('');
      	} else {
					console.log(error);
      		Notifications.error('Error!', 'Couldn\'t save that expense...');
      	}
      });

    }

  });

  /*****************************************************************************/
  /* CreateExpense: Helpers */
  /*****************************************************************************/
  Template.CreateExpense.helpers({
  });

  /*****************************************************************************/
  /* CreateExpense: Lifecycle Hooks */
  /*****************************************************************************/
  Template.CreateExpense.created = function () {
    console.log('created');
  };

  Template.CreateExpense.rendered = function () {
    console.log('rendered form');
  };

  Template.CreateExpense.destroyed = function () {
  };

}