$(() =>{
  const $hoop = $('.hoop');
  const $ball =  $('.ball');
  let $hoopOffset = null;
  let $ballOffset = null;

  let HDirection = '+';

  setInterval(function(){
    const hoop = parseInt($hoop.css('margin-left'));

    //moving from left to right of the screen
    if(hoop > $('body').width() - $hoop.width() )
      HDirection = '-';
    else if(hoop < 0 )
      HDirection = '+';
    $('.hoop').css('margin-left', `${HDirection}=1px`);
  });

  $('button').click(function() {
    $('.ball').animate({top: '160px'}, checkCollision);
  });

  function checkCollision(){

    $hoopOffset = $hoop.offset();
    $ballOffset = $ball.offset();

    const condition1 = ($ballOffset.left < $hoopOffset.left + $hoop.width() );

    const condition2 = ($ballOffset.left + $ball.width() > $hoopOffset.left);

    const condition3 = ($ballOffset.top < $hoopOffset.top + $hoop.height() );

    const condition4 = ($ball.height() + $ballOffset.top > $hoopOffset.top);

    if (condition1 && condition2 && condition3 && condition4){
      console.log('score');
    } else {
      console.log('miss');
    }
    resetAnimation();
  }

  function resetAnimation(){
    $('.ball').animate({
      top: '160px'
    }, 'slow', function () {
      $(this).removeAttr('style');
    });
  }


});
