if (Meteor.isClient) {
  // Inside the if (Meteor.isClient) block, right after Template.body.helpers:
  Template.body.events({
    'submit .create-expense': function (e) {
      

      var subject = event.target.subject.value;

      Tasks.insert({
        subject: subject
      });

      // Clear form
      event.target.subject.value = "";

      // Prevent default form submit
      return false;
    }
  });
}