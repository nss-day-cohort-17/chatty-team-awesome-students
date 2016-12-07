  var inputMessage = document.getElementById('inputMessage');

  document.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      document.getElementById('userMessage').innerHTML = inputMessage.value;
    }
  });
