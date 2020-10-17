var Friends = {

  initialize: function() {
    this.toggleStatus();
  },

  toggleStatus: function(username) {
    let $username;
    $('.username').on('click', (event) => {
      $username = $(event.target).text();
      if (!Friends.friendsList.includes($username)) {
        Friends.friendsList.push($username);
      } else {
        Friends.friendsList.splice(Friends.friendsList.indexOf($username), 1);
      }
    });
  },

  friendsList: []
};