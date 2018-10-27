$(document).ready(function(e) {   

var $msgModal = $('#msgModal').modal({backdrop : false, show : false, keyboard : false}),
  showMsg = function (header, text, callback) {
    $msgModal
      .find('.modal-header > h3').text(header).end()
      .find('.modal-body').text(text).end()
      .find('.callback-btn').off('click.callback')
        .on('click.callback', callback).end()
      .modal('show');
  },
  headers = ["OMG!!", "WAT", "Alert", "Random Notice"],
  bodies = [
    "Yep...",
    "You're not supposed to do that!",
    "It's over 9000!!!",
    "We're doing it live!"
  ];
  
$('#modalPopper').click(function (e) {
  console.log("hi");
 var $msgModal = $('#msgModal').modal({backdrop : false, show : false, keyboard : false});
 $msgModal
      .find('.modal-header > h3').text("j").end()
      .find('.modal-body').text("j").end()
      .find('.callback-btn').off('click.callback')
        .on('click.callback', null).end()
      .modal('show');
});

});