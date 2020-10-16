var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  renderMessage: function(message) {
    var renderedMessage = MessageView.render(message);
    $(renderedMessage).appendTo(MessagesView.$chats);
  }

};