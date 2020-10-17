var Rooms = {

  add: function() {
    $('#rooms button').on('click', function() {
      var text = prompt('Enter room name here');
      if (text) {
        RoomsView.renderRoom(text);
      }
    });
  },

  select: function() {
    $('select').on('change', () => {
      var targetRoomName = $('select option:selected').text();
      alert(targetRoomName);
    });
  }

};