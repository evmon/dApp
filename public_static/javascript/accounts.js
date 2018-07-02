
$(document).ready(function () {

  $('#send').click(function () {
    $('#status').text("Sending...");
    let bonus = $('#bonus').val();
    let receiver = $('#receiver').val();
    $.post('/getBonus', {receiver : receiver}, function (response) {
      $('#status').text("Sent!!" + response);
    })
  });
})
