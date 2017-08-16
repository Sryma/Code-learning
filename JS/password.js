// fake ajax

// form validation

  $('form').submit(function() {
    var firstName = $('#first').val();
    var lastName = $('#last').val();
    var email = $('#email').val();
    var password = $('#password').val();
    
    if(firstName === "") {
     $(".first-name-error").text("please enter your first name ");
     return true;
     

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
        $('.projects').css("color","grey")
        $('.navigation').toggle();
        $('.navigation').css("color","red");
        
   $(this).text('projects viewed');
   $(this).css("color","yellow")
    
    });//here this refers to button class '.projects-button'

//$('. navigation').on('click',function(){
   // $(this).css("color","red");
 //});