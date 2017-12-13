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


  let HDirection = '+';

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

  function checkCollision(){

    $hoopOffset = $hoop.offset();
    $ballOffset = $ball.offset();

    $condition1 = ($ballOffset.left < $hoopOffset.left + $hoop.width() );

    $condition2 = ($ballOffset.left + $ball.width() > $hoopOffset.left);

    $condition3 = ($ballOffset.top < $hoopOffset.top + $hoop.height() );

    $condition4 = ($ball.height() + $ballOffset.top > $hoopOffset.top);

    if ($condition1 && $condition2 && $condition3 && $condition4){
      console.log('score');
      levelUp();
      alert('You scored! Next level.');
    } else {
      console.log('miss');
      loseLife();
      alert('You missed, lose a life...');

    }


    resetAnimation();
  }


  function levelUp() {
    win++;
    if (win < 4) {
      $('.win').html(`${win}`);
    }
    if (win === 4) {
      $winner.show();
    }
  }

  function loseLife() {
    lose--;
    $('.lose').html(`${lose}`);
    if (lose === 0) {
      $gameOver.show();
    }
  }


  function resetAnimation(){
    $('.ball').animate({
      top: '160px'
    }, 'slow', function () {
      $(this).removeAttr('style');
    });
  }


  function refreshButton(){
    location.reload();
  }

  $refresh.on('click', refreshButton);

  function enter() {
    $enter.hide();
  }
  $enter.on('click', enter);
});
