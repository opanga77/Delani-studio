$(document).ready(function() {
  $("#designLogo").click(function() {
    $(".toggleDesignLogo").toggle();
  });

  $("#devLogo").click(function() {
    $(".toggleDevLogo").toggle();
  });

  $("#productLogo").click(function() {
    $(".toggleProductLogo").toggle();
  });
});
$(document).ready(function() {
  $('.work1Logo').hover(function() {
    console.log('hovering')
    $("#work1Text").show();
  });
});
console.log('it works')
$(document).ready(function() {
  $('.submit').click(function(event) {
    event.preventDefault();
    console.log('clicked button');
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('exampleFormControlInput1').value;
    var message = document.getElementById('messageInput').value;
    var statusElm = document.getElementById('status');

    if (email.length > 5 && email.includes('@') && email.includes('.')) {
      console.log("email valid")
    } else {
      console.log("email invalid")
    }
    if (name.length > 2) {
      console.log(name);
    } else {
      console.log('name invalid')
    }
    if (message.length > 2) {
      document.getElementById('status').innerText = "Thank you for your message!"
    } else {
      document.getElementById('status').innerText = "Null"
    }
  });

});