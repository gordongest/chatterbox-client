var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  renderMessage: function(message) {
    var renderedMessage;
    if (Friends.friendsList.includes(message.username)) {
      renderedMessage = MessageView.renderFriend(message);
    } else {
      renderedMessage = MessageView.render(message);
    }
    $(renderedMessage).appendTo(MessagesView.$chats);
  }};