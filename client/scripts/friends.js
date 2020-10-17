var Friends = {

  initialize: function() {
    this.toggleStatus();
  },

  toggleStatus: function(username) {
    let $username;
    $('.username').on('click', (event) => {
      // console.log(event.target);
      $username = $(event.target).text();
      // alert($username);
      // Friends.toggleStatus($username);
      console.log($username);
      if (!Friends.friendsList.includes($username)) {
        Friends.friendsList.push($username);
      } else {
        Friends.friendsList.splice(Friends.friendsList.indexOf($username), 1);
      }

      console.log(Friends.friendsList);
    });
  },

  friendsList: []
  /* iterate through array of 'friend' usernames,affect display of messages if (Friends.friendList.contains(username)) */
};