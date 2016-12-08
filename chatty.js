
  var inputMessage = document.getElementById('inputMessage');

  document.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById('message-board').innerHTML = inputMessage.value;
    }
  });































//html to append each time the user inputs text
// <p>
//     ${userinput}
//     <button type="button" name="delete-post">Delete</button>
// </p>
