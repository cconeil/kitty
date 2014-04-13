console.log("kitty");


$(function () {
    /*
    $.getScript("https://www.parsecdn.com/js/parse-1.2.18.min.js", function () {
  //      setTimeout (function () {
//            google.load("search", "1"); 
    //        }, 1000);          
        console.log('loaded parse');
        Parse.initialize("sKVxInRYIY3tRWXF6JWu8XuD5zLrtokBQO7i4V6X", "8AyKwmtCy6ByEYv96snwdDZzL3GftwzuJGlfDvWS");
        var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});
*/
Parse.initialize("sKVxInRYIY3tRWXF6JWu8XuD5zLrtokBQO7i4V6X", "8AyKwmtCy6ByEYv96snwdDZzL3GftwzuJGlfDvWS");
        var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
    });


}); 







document.onkeydown = function(event) {
    //console.log(google.load);
  // NOTE: the close curly brace is key 221
  setTimeout(function( ) { 
    if (event.keyCode === 221) {
        scan();
    }
  }, 100);

};

function replaceTargetWith(elt, html){
  /// find our target
  // var i, div, elm, last, target = document.getElementById(targetID);
  // /// create a temporary div
  // div = document.createElement('div');
  // /// fill that div with our html, this generates our children
  // div.innerHTML = html.replace(/"/g, "");
  // /// step through the temporary div's children and insertBefore our target
  // i = div.childNodes.length;
  // /// the insertBefore method was more complicated than I first thought so I 
  // /// have improved it. Have to be careful when dealing with child lists as they 
  // /// are counted as live lists and so will update as and when you make changes.
  // /// This is why it is best to work backwards when moving children around, 
  // /// and why I'm assigning the elements I'm working with to `elm` and `last`
  // last = target;
  // while(i--){
  //   target.parentNode.insertBefore((elm = div.childNodes[i]), last);
  //   last = elm;
  // }
  /// remove the target.
  // elt.parent().append($("<img src='http://4.bp.blogspot.com/_naR8H83E0A4/TJ1Q9zZuAfI/AAAAAAAAAFA/bfbzLBJ7RQ0/s1600/kitty1-922835.jpeg'></img>"));

  console.log('not removing shit');
  var parent = elt.parent();

  // console.log(elt);

  console.log(elt.first());
  console.log($(elt.first()).text());

  console.log(/{{.+}}/.exec(elt.first().text()));
  //document.getElementByClassName


  // elt.first().val('cock');
  // elt.prepend("<img src='http://4.bp.blogspot.com/_naR8H83E0A4/TJ1Q9zZuAfI/AAAAAAAAAFA/bfbzLBJ7RQ0/s1600/kitty1-922835.jpeg' />");

  // elt.parentNode.removeChild(target);
}

function grabImageUrl (queryString, callback) {

  queryString = 'purple monkey'
  $.ajax({
    url: "https://ajax.googleapis.com/ajax/services/search/images",
    data: {
      v: 1.0,
      q: queryString
    }
  })
  .done(function(data) {


    var imageData = data['responseData']['results'][0];

    console.log(imageData);

    var imageUrl = imageData['url'];

    console.log(imageUrl);


    callback(imageUrl);
  });







    //console.log(window.google);
//    google.load("search", "1");

    //console.log(google.load);
    //searches google for the url of the first image returned when you search this string
    setTimeout(function() {
        callback('https://4.bp.blogspot.com/_naR8H83E0A4/TJ1Q9zZuAfI/AAAAAAAAAFA/bfbzLBJ7RQ0/s1600/kitty1-922835.jpeg');
    }, 0);
}

var getTextNodesIn = function(el) {
    return $(el).find(":not(iframe)").addBack().contents().filter(function() {
        return this.nodeType == 3;
    });
};

function getDeepestElement (cb) {
    $(".editable").each(function(index) {
        that = this;
        getTextNodesIn($(this)).each(function(childindex) {
            if(/{{.+}}/.exec($(this).text())) {
                //console.log($(this));
                var blah = $(this).text();
                var blah2 = blah.replace(/{{.+}}/, "");
                $(this).text(blah2);
                that.replaceChild(document.createTextNode(blah2), this);

                grabImageUrl("kittycat", function(image) {
                    console.log('adding kitty');
                    var img = document.createElement('img');
                      /// fill that div with our html, this generates our children
                    img.src = image;
                    $(that).append(img);
                });
            //      cb($(this));
            }
        });


    });
}

function scan() {
  console.log('scanning');
  //locate targetID of the double bracket value shit
  //call the html function on that shit
  getDeepestElement(function(elt) {
    console.log(elt);
    replaceTargetWith(elt,"<img src='https://4.bp.blogspot.com/_naR8H83E0A4/TJ1Q9zZuAfI/AAAAAAAAAFA/bfbzLBJ7RQ0/s1600/kitty1-922835.jpeg'></img>");
  });
}

// returns the string without the text found in
// the curly braces.  NOTE: You may get a couple of
// extra spaces because of this function.  #YOLO
function stripString(string) {
  //return x.replace(/{{(.*?)}}/, "");
}





