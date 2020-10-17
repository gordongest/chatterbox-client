var FormView = {

  $form: $('form'),

  initialize: () => {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: (event) => {
    // Stop the browser from submitting the form
    event.preventDefault();
    var text = $('#message').val();
    var message = {
      username: App.username,
      text: $('#message').val(),
      roomname: $('select option:selected').text()
    };
    $('.submit').click(Parse.create(message));
    console.log(message);
    $('#chats').empty();
    App.fetch();
  },

  setStatus: (active) => {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};