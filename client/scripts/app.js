var App = {

  $spinner: $('.spinner img'),
  username: 'anonymous',

  initialize: () => {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    Friends.initialize();
    // Rooms.select();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // $('.username').on('click', Friends.toggleStatus());

    setInterval(function() {
      $('#chats').empty();
      App.startSpinner();
      App.fetch(App.stopSpinner);
    }, 30000);

  },

  fetch: (callback = ()=>{}) => {

    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log('HERE', data);
      for (let message of data.results) {
        if (message.username === undefined || message.text === '') {
          continue;
        }
        MessagesView.renderMessage(message);
        if (message.roomname) {
          RoomsView.renderRoom(message.roomname);
        }
      }
      Friends.toggleStatus();
      callback();
    });
  },

  startSpinner: () => {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: () => {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }

};



$('select').on('change', (room = 'lobby') => {
  var selectedVal = $(this).find(':selected').val();
  var selectedText = $(this).find(':selected').text();
});