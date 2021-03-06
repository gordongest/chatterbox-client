var App = {

  $spinner: $('.spinner img'),
  username: 'anonymous',

  initialize: () => {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    Friends.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    setInterval(function() {
      App.startSpinner();
      App.fetch(App.stopSpinner);
    }, 15000);

  },

  fetch: (callback = ()=>{}, room) => {
    $('#chats').empty();
    Parse.readAll((data) => {
      for (let message of data.results) {
        if (message.username === undefined || message.text === '') {
          continue;
        }
        if (message.roomname) {
          if (!RoomsView.roomsList.includes(message.roomname)) {
            RoomsView.renderRoom(message.roomname);
            RoomsView.roomsList.push(message.roomname);
          }
        }

        if (room) {
          if (message.roomname === room) {
            console.log('yurp');
            MessagesView.renderMessage(message);
          }
        } else {
          MessagesView.renderMessage(message);
        }
      }
      callback();
      Friends.toggleStatus();
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