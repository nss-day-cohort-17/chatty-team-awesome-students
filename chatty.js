
  var inputMessage = document.getElementById('inputMessage');

  document.addEventListener("keydown", function(event) {
    var userInputMessage = "";
    if (event.key === "Enter") {
      event.preventDefault();
      userInputMessage  +=
      `<p>
          ${inputMessage.value}
          <button type="button" name="delete-post">Delete</button>
      </p>`
      document.getElementById('inputMessage').value = "";
    }
    document.getElementById('message-board').innerHTML += userInputMessage;
  });































//html to append each time the user inputs text
// <p>
//     ${userinput}
//     <button type="button" name="delete-post">Delete</button>
// </p>
