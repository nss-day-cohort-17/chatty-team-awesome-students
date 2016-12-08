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

//   document.querySelector("div.message-board").addEventListener("click", function(e) {
//     console.log(e);
//
//   if (e.target.className === "deleteButton") {
//     console.log("You clicked on the delete button");
//   }
// });



var productData = new XMLHttpRequest();
productData.addEventListener("load", starterMessages);
productData.open("GET", "starter-msg.json");
productData.send();

//populates the data to the html page
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


//clear message board
var clearBoard = document.getElementById('clearBoard');
clearBoard.addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById('message-board').innerHTML = '';
})
