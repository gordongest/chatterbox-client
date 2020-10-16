var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // todo
  },

  render: _.template(`
    <option value="<%- roomName %>"><%- roomName %></option>
  `),

  renderRoom: function(room) {
    var roomObj = {roomName: room};
    $(RoomsView.render(roomObj)).appendTo(RoomsView.$select);
  }

};

