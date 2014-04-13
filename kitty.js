


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




