var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // todo
  },

  renderMessage: function(message) {
    var renderedMessage = MessageView.render(message);
    $(renderedMessage).appendTo(MessagesView.$chats);
  }

};