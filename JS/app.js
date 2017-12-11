$(() =>{
  const $el = $('.hoop');

  let HDirection = '+';

  setInterval(function(){
    const hoop = parseInt($el.css('margin-left'));

    //moving from left to right of the screen
    if(hoop > $('body').width() - $el.width() )
      HDirection = '-';
    else if(hoop < 0 )
      HDirection = '+';
    $('.hoop').css('margin-left', `${HDirection}=1px`);

  });

  $('button').click(function() {
    $('.ball').animate({top: '160px'});

  });

});
