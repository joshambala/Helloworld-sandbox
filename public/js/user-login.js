// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#signup-submit").on("click", function(event) {
  event.preventDefault();

  // make a newUser obj
  var newUser = {
    // user_name from user_name input
    user_name: $("#user_name").val().trim(),
    // password from password input
    password: $("#password").val().trim(),
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/new", newUser)
    // on success, run this callback
    .done(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding character...");
    });

  // empty each input box by replacing the value with an empty string
  $("#user_name").val("");
  $("#password").val("");

});
