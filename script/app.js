$(() =>{
  const $hoop = $('.hoop');
  const $ball =  $('.ball');
  let $hoopOffset = null;
  let $ballOffset = null;
  let $condition1 = null;
  let $condition2 = null;
  let $condition3 = null;
  let $condition4 = null;
  let lose = 5;
  let win = 1;
  const $gameOver = $('.gameOver');
  const $refresh = $('.reset');
  const $winner = $('.winner');
  const $enter = $('.starter');
  const $missAlert = $('.missAlert');
  const $winAlert = $('.winAlert');
  const $audioScore = $('.scoreSound').get(0);
  const $audioMiss = $('.missSound').get(0);
  let HDirection = '+';

  
  //sets speed of hoop
  setInterval(function(){
    const hoop = parseInt($hoop.css('margin-left'));
    const speed = 3;
    //moving from left to right of the screen
    if(hoop > $('body').width() - $hoop.width() )
      HDirection = '-';
    else if(hoop < 0 )
      HDirection = '+';
    $('.hoop').css('margin-left', `${HDirection}=${speed * win}px`);
  });

  $('.shoot').click(function() {
    $('.ball').animate({top: '160px'}, checkCollision);
  });
  //Checks for the collision between the ball and hoop
  function checkCollision(){

    $hoopOffset = $hoop.offset();
    $ballOffset = $ball.offset();

    $condition1 = ($ballOffset.left < $hoopOffset.left + $hoop.width() );

    $condition2 = ($ballOffset.left + $ball.width() > $hoopOffset.left);

    $condition3 = ($ballOffset.top < $hoopOffset.top + $hoop.height() );

    $condition4 = ($ball.height() + $ballOffset.top > $hoopOffset.top);

    if ($condition1 && $condition2 && $condition3 && $condition4){

      levelUp();
      winPopUp();
      playWinSound();
    } else {

      loseLife();
      missPopUp();
      playMissSound();

    }
    //shows the pop up when a score is registered
    function winPopUp() {
      $winAlert.show();
    }
    // hides the pop up after 2 seconds
    setTimeout(function(){
      $winAlert.hide();
    }, 2000);
    // plays sound when score is registered
    function playWinSound() {
      $audioScore.src = './sounds/score.wav';
      $audioScore.play();
    }
    //shows the pop up when a miss is registered
    function missPopUp(){
      $missAlert.show();
    }
    //hides the pop up after 2 seconds
    setTimeout(function(){
      $missAlert.hide();
    }, 2000);
    //plays sound when miss is registered
    function playMissSound() {
      $audioMiss.src = './sounds/miss.wav';
      $audioMiss.play();
    }

    resetAnimation();
  }

  //increases the level number to 3 and speeds up the hoop
  function levelUp() {
    win++;
    if (win < 4) {
      $('.win').html(`${win}`);
    }
    if (win === 4) {
      $winner.show();
    }
  }
  //decrease the live number
  function loseLife() {
    lose--;
    $('.lose').html(`${lose}`);
    if (lose === 0) {
      $gameOver.show();
    }
  }

  //resets the ball to the bottom of the screen
  function resetAnimation(){
    $('.ball').animate({
      top: '160px'
    }, 'slow', function () {
      $(this).removeAttr('style');
    });
  }

  //the function that refreshes the page when clicked
  function refreshButton(){
    location.reload();
  }

  $refresh.on('click', refreshButton);

  function enter() {
    $enter.hide();
  }
  $enter.on('click', enter);


});
