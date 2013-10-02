$(document).ready(function(){
  var paused = false;
  var modifiers = [ 
    'a nice',
    'an awesome',
    'a great',
    'a stellar',
    'a good',
    'an amazing',
    'a fulfilling',
    'a rewarding',
    'a fun',
    'a magical',
    'a wonderful',
    'a peaceful',
    'an exciting',
    'a marvelous',
    'a positive',
    'a rewarding',
    'an epic',
    'a trouble-free',
    'a worry-free',
    'a productive',
    'a fantastic',
    'an enlightening',
    'the perfect',
    'a prolific',
    'an above average',
    'a meaningful',
    'a relaxing',
    'a solid',
    'a magical',
    'a stress-free',
    'a beautiful',
    'a fabulous',
    'a cheerful',
    'a bright'
  ]

  var rotateDay = function(){
    if(paused == false){
      var id = Math.floor(Math.random()*modifiers.length)+1;
      $('#description').html(modifiers[id]);
      var changeModifier = setTimeout(rotateDay,2000);
    }
  }

  $('#pause').on('click', function(){
    paused == false ? paused = true : paused = false;
    if (paused == false){
      $('#pause').html('Pause');
      setTimeout(rotateDay, 500);
    }
    else{
      $('#pause').html('Resume');
    }
  })

  setTimeout(rotateDay, 2500);

})