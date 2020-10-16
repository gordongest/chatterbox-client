var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  renderMessage: function(message) {
    var rendered = MessageView.render(message);
    // ( ".inner" ).append( "<p>Test</p>" );
    $(rendered).appendTo(MessagesView.$chats);
  }

};