$(document).ready(function(){
  $(function() {
    var $datePicker = $('.js-date');

    var picker = new Pikaday({
      field: $datePicker.get(0)
    });
  });
})
