var Rooms = {

  add: function() {
    $('#rooms button').on('click', function() {
      var text = prompt('Enter room name here');
      if (text) {
        console.log(text); // for example I've made an alert
        RoomsView.renderRoom(text);
      }
    });
  },

  select: function() {
    $('select').on('change', () => {
      var selectedVal = $(this).find(':selected').val();
      alert(selectedVal);
    });
  }

};