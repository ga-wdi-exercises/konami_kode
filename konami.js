$(document).ready(function(){
  var keysDesired = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  var keysPressed = [];

  $("body").on("keyup", function(event){
    keysPressed.push(event.keyCode);
    var desired = keysDesired.join(" ");
    var pressed = keysPressed.join(" ");
    if(pressed === desired){
      konamification();
      keysPressed = [];
    }else if(pressed !== desired.substring(0, pressed.length)){
      keysPressed = [];
    }
  });

  function konamification(){
    $("html").addClass("party");
    setTimeout(function(){
      $("html").removeClass("party");
    }, 2000);
  }
});
