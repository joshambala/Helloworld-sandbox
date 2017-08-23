$(document).ready(function() {
  // Getting references to the name inout and author container, as well as the table body
  var nameInput = $("#username");
  var passInput = $("#password");
  
  $(document).on("submit", "#author-form", handleAuthorFormSubmit);

  // A function to handle what happens when the form is submitted to create a new Author
  function handleAuthorFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim().trim()) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    upsertAuthor({
      username: nameInput.val().trim(),
      password: passInput.val().trim()
    });
  }

  // A function for creating an author. Calls getAuthors upon completion
  function upsertAuthor(authorData) {
    $.post("/api/authors", authorData).then(reRoute());
  }

  function reRoute() {
    window.location.href = "/user";
  }
});