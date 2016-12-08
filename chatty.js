
var inputMessage = document.getElementById('inputMessage');

document.addEventListener("keydown", function(event) {
var userInputMessage = "";
if (event.key === "Enter") {
  event.preventDefault();
  userInputMessage  +=
  `<p>
      ${inputMessage.value}
      <button class="deleteButton" type="button" name="delete-post">Delete</button>
  </p>`
  document.getElementById('inputMessage').value = "";
}
document.getElementById('message-board').innerHTML += userInputMessage;
});




var productData = new XMLHttpRequest();
productData.addEventListener("load", starterMessages);
productData.open("GET", "starter-msg.json");
productData.send();


function starterMessages(e) {
    var data = JSON.parse(e.target.responseText);

    var startMessage = "";
    for (var i = 0; i < data.starerMsg.length; i++) {
        console.log(data.starerMsg[i].message);
        startMessage  +=    `<p>
                                ${data.starerMsg[i].message}
                                <button class="deleteButton" type="button" name="delete-post">Delete</button>
                            </p>`
    }
    document.getElementById('message-board').innerHTML += startMessage;
}



























//html to append each time the user inputs text
// <p>
//     ${userinput}
//     <button type="button" name="delete-post">Delete</button>
// </p>
