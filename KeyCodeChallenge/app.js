let keycodeContainer = document.getElementById("keycode-container");
      
window.addEventListener("load", function(event) {
  alert("Welcome to the Keycode Generator!");
});

document.addEventListener("keydown", function(event) {
  let code = event.code;
  let key = event.key;
  let which = event.which;
  keycodeContainer.innerHTML = "Code: " + code + "<br>Key: " + key + "<br>Which: " + which;
});