var Rooms = {

  add: function() {

  },

  select: function() {
    $('select').on('change', () => {
      var selectedVal = $(this).find(':selected').val();
      alert(selectedVal);
    });
  }

};