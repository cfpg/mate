if (Meteor.isClient) {

  /*****************************************************************************/
  /* CreateExpense: Event Handlers */
  /*****************************************************************************/
  Template.CreateExpense.events({
    
    'submit form': function(e){
      e.preventDefault();
      
      var val = e.target.subject.value;

      Expenses.insert({
        subject: val
      });

      // Clear form
      event.target.subject.value = '';

      // Prevent default form submit

      return false;

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