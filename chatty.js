
  var inputMessage = document.getElementById('inputMessage');

  document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById('message-board').innerHTML =
      `<p>
          ${inputMessage.value}
          <button type="button" name="delete-post">Delete</button>
      </p>`

    }
  });































//html to append each time the user inputs text
// <p>
//     ${userinput}
//     <button type="button" name="delete-post">Delete</button>
// </p>
