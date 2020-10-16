var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    $('#rooms button').click(Rooms.add());
  },

  render: _.template(`
    <option value="<%- roomName %>"><%- roomName %></option>
  `),

  renderRoom: function(room) {
    var roomObj = {roomName: room};
    var renderedRoom = RoomsView.render(roomObj);
    $(renderedRoom).appendTo(RoomsView.$select);
  }

};

