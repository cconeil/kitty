


console.log("kitty");

document.onkeydown = function(event) {

  // NOTE: the close curly brace is key 221

  if (event.keyCode === 221) {
    scan();
  }
};


function scan() {
  console.log('scanning');
}

// returns the string without the text found in
// the curly braces.  NOTE: You may get a couple of
// extra spaces because of this function.  #YOLO
function stripString(string) {
  returns x.replace(/{{(.*?)}}/, "");
}




