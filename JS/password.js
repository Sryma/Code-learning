// fake ajax

// form validation

  $('form').submit(function() {
    var firstName = $('#first').val();
    var lastName = $('#last').val();
    var email = $('#email').val();
    var password = $('#password').val();
    
    if(firstName === "") {
     $(".first-name-error").text("please enter your first name");
    }
    if(lastName === "") {
     $(".last-name-error").text("please enter your last name");
    }
  if(email === "") {
     $(".email-error").text("please enter your email");
    }
    if(password === "") {
     $(".password-error").text("please enter your password"); 
          
    }
    return false;
  
  });

$('.projects-button').on('click', function() {
        $('.projects').toggle();
   $(this).text('projects viewed');
    
    });

$('.notification').on('click',function(){
    $(this).toggleClass('work');
 });