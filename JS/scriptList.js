$('.list').hide(4000);
$('.list').show(4000);

function template(text) {
  return '<p><input type="radio"><i class="fa fa-asterisk add" aria-hidden="true"></i><span>' + text + '</span><i class="fa fa-scissors remove" aria-hidden="true"></i></p>';
};
function main() {
  $('form').on('submit', function(event) {
  
    var text = $('#todo').val();
    var html = template(text);
    $('.list').append(html);
    $('#todo').val('');
    alert('you are added element')
    $('#todo').css("background-color","red");
    return false;  
  });
  
  $('.list').on('click', '.add', function () {
    $(this).toggleClass('active');

  })
  
  $('.list').on('click', '.remove', function () {
    $(this).parent().remove();
    alert('you are removed element');
    $('#todo').css("background-color","pink");

  });
  
  
};
  
  
$(document).ready(main);