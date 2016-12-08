//global variables caputer user input and clear message board button
var inputMessage = document.getElementById('inputMessage');
var clearBoard = document.getElementById('clearBoard');
var checkbox1 = document.getElementById('darkTheme')
var checkbox2 = document.getElementById('largeText');
var targetNav = document.getElementById('navTheme')
var targetBody = document.querySelector('body')
var messageBoard = document.getElementById('message-board');

//populates html page upon enter button pressed
document.addEventListener("keydown", function(event) {
var userInputMessage = "";
if (event.key === "Enter") {
  event.preventDefault();

  //appends paragraph with user input
  userInputMessage  +=
                        `<p>
                            ${inputMessage.value}
                            <button class="deleteButton" type="button" name="delete-post">Delete</button>
                        </p>`

        //returns input field to empty
        inputMessage.value = "";

        //turns the clear message board button back on after user input
        clearBoard.disabled = false;
    }
    //assigns message board to new user input
    messageBoard.innerHTML += userInputMessage;
});

//allows each delete button next to messages to delete the post
document.querySelector("body").addEventListener("click", function(e) {
  if (e.target.className === "deleteButton") {
    e.target.parentElement.parentElement.removeChild(e.target.parentElement)
  }
});


//new XHR request that calls message data from json file
var productData = new XMLHttpRequest();
productData.addEventListener("load", starterMessages);
productData.open("GET", "starter-msg.json");
productData.send();

//populates the data from json to the html page
function starterMessages(e) {
    //captures object>array>objects in var
    var data = JSON.parse(e.target.responseText);

    var startMessage = "";
    for (var i = 0; i < data.starerMsg.length; i++) {
        console.log(data.starerMsg[i].message);
        startMessage  +=    `<p>
                                ${data.starerMsg[i].message}
                                <button class="deleteButton" type="button" name="delete-post">Delete</button>
                            </p>`
    }
    messageBoard.innerHTML += startMessage;

}

//clear message board
clearBoard.addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById('message-board').innerHTML = '';
    //disables the button after it deletes the board UNTIL more user inputs are added
    clearBoard.disabled = true;
})

checkbox1.addEventListener("click", function(e){
  targetBody.className += "addDarkTheme"
  targetNav.className += "addDarkTheme"
  }
})

checkbox2.addEventListener("click", function (e) {
  targetBody.style.fontSize = "1.8em";
  targetBody.style.color = "black";
})
