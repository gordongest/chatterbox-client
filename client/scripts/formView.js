var FormView = {

  $form: $('form'),

  initialize: () => {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: (event) => {
    // Stop the browser from submitting the form
    event.preventDefault();
    $('.submit').click(Parse.create());
    console.log('click!');
  },

  setStatus: (active) => {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};