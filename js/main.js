$(document).ready(function(){
  var paused = false;
  var modifiers = [ 
    ' nice',
    ' great',
    ' stellar',
    ' good',
    ' fulfilling',
    ' rewarding',
    ' fun',
    ' magical',
    ' wonderful',
    ' peaceful',
    ' marvelous',
    ' positive',
    ' rewarding',
    ' trouble-free',
    ' worry-free',
    ' productive',
    ' fantastic',
    ' perfect',
    ' prolific',
    ' meaningful',
    ' relaxing',
    ' solid',
    ' magical',
    ' stress-free',
    ' beautiful',
    ' fabulous',
    ' cheerful',
    ' bright',
    ' sublime',
    ' terrific',
    ' phenomenal'
  ]

  var rotateDay = function(){
    if(paused == false){
      var description = $('#description');
      var id = Math.floor(Math.random()*modifiers.length)+1;
      // color generation from http://www.paulirish.com/2009/random-hex-color-code-snippets/
      var color = '#'+Math.floor(Math.random()*16777215).toString(16);
      description.html(modifiers[id]);
      description.css('color', color);
      var changeModifier = setTimeout(rotateDay,2000);
    }ß
  }

  $('#pause').on('click', function(){
    paused == false ? paused = true : paused = false;
    if (paused == false){
      $('#pause').html('Pause');
      setTimeout(rotateDay, 500);
    }
    else{
      clearTimeout(rotateDay);
      $('#pause').html('Resume');
    }
  })

  setTimeout(rotateDay, 2500);

})
