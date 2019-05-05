var email = $('#exampleFormControlInput1').val();
var name = $('#nameInput').val();
var message = $('#messageInput').val();
var statusElm = $('#status');
statusElm.empty();
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
  statusElm.html('< div > Thank you for your message" < /div>');
} else {
  statusElm.html("Cool");
}

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
console.log('it works')
$(document).ready(function() {
  $('.submit').click(function(event) {
    event.preventDefault();
    console.log('clicked button');

  });
});