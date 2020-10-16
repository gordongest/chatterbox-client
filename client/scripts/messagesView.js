var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('.username').click(Friends.toggleStatus());
  },

  renderMessage: function(message) {
    var renderedMessage = MessageView.render(message);
    $(renderedMessage).appendTo(MessagesView.$chats);
  }

};