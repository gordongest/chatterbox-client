var App = {

  $spinner: $('.spinner img'),
  username: 'gerf',

  initialize: () => {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    Friends.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(this.stopSpinner);

    $('.username').click(Friends.toggleStatus());

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
      }

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
