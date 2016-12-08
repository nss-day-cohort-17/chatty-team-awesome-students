
  var inputMessage = document.getElementById('inputMessage');

  document.addEventListener("keydown", function(event) {
    var userInputMessage = "";
    if (event.key === "Enter") {
      event.preventDefault();
      userInputMessage  +=
      `<p class="messageSection">
          ${inputMessage.value}
          <button class="deleteButton" type="button name="delete-post">Delete</button>

      </p>`
      document.getElementById('inputMessage').value = "";
    }
    document.getElementById('message-board').innerHTML += userInputMessage;
  });

  document.querySelector("body").addEventListener("click", function(e) {
    console.log(e);

  if (e.target.className === "deleteButton") {
    console.log("You clicked on the delete button");
  }
});
























//html to append each time the user inputs text
// <p>
//     ${userinput}
//     <button type="button" name="delete-post">Delete</button>
// </p>
