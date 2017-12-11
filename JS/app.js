$(() =>{
  const $el = $('.hoop');
  let HDirection = '+';
  setInterval(function(){
    const left = parseInt($el.css('margin-left'));

    //moving from left to right of the screen
    if(left > $(window).width() )
      HDirection = '-';
    else if(left < 0 )
      HDirection = '+';
    $('.hoop').css('margin-left', `${HDirection}=1px`);
  });
});
