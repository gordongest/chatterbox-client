var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', Rooms.add(/* pass in a .val() here? */));
    Rooms.select();
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

// Rooms.add(/* pass in a .val() here? */)