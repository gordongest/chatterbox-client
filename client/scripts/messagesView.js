var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  userClick: () => {
    // $('.username').click( (event) => {
    //   console.log(event.target);
    //   let $username = $(event.target).text();
    //   Friends.toggleStatus($username); /* .val() */
    //   console.log($username);
    // });
    // console.log(Friends.friendsList);
    // $('#chats').empty();
    // App.fetch();
    // $('.username').on('click', '.username', function () {
  },

  renderMessage: function(message) {
    var renderedMessage = MessageView.render(message);
    $(renderedMessage).appendTo(MessagesView.$chats);
  }
  // $myElement.css("font-weight","Bold");
};