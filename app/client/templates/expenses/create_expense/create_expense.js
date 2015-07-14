/*****************************************************************************/
/* CreateExpense: Event Handlers */
/*****************************************************************************/
Template.CreateExpense.events({
  
  'submit .create-expense': function(e){
    
    if (e) e.preventDefault();
    
    var subject = e.target.text.value;

    console.log('subject', subject);
    console.log('typeof', typeof subject);

    Expenses.insert({
      'subject': subject,
      'amount': 130,
      'payer': 1
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