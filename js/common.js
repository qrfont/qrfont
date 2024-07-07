function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
}

// input text update
function updateInput() {
  const inputText = document.getElementById("myInput").value;
  const textContentElements = document.querySelectorAll('#font-text');
  textContentElements.forEach(element => {
    element.textContent = inputText;
  });
}