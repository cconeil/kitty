


console.log("kitty");

document.onkeydown = function(event) {

  // NOTE: the close curly brace is key 221

  if (event.keyCode === 221) {
    scan();
  }
};

function replaceTargetWith( targetID, html ){
  /// find our target
  var i, div, elm, last, target = document.getElementById(targetID);
  /// create a temporary div
  div = document.createElement('div');
  /// fill that div with our html, this generates our children
  div.innerHTML = html.replace(/"/g, "");
  /// step through the temporary div's children and insertBefore our target
  i = div.childNodes.length;
  /// the insertBefore method was more complicated than I first thought so I 
  /// have improved it. Have to be careful when dealing with child lists as they 
  /// are counted as live lists and so will update as and when you make changes.
  /// This is why it is best to work backwards when moving children around, 
  /// and why I'm assigning the elements I'm working with to `elm` and `last`
  last = target;
  while(i--){
    target.parentNode.insertBefore((elm = div.childNodes[i]), last);
    last = elm;
  }
  /// remove the target.
  target.parentNode.removeChild(target);
}

function grabImageUrl (string) {
    //searches google for the url of the first image returned when you search this string
}

function scan() {
  console.log('scanning');
  //locate targetID of the double bracket value shit
  //call the html function on that shit
  $(":contains('}}')").each(function(i , v){
    $(this).closest("div").css("height" , "500px");
}





