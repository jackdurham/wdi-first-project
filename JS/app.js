$(() =>{
  const $el = $('.hoop');
  let HDirection = '+';
  let VDirection = '+';
  setInterval(function(){
    const left = parseInt($el.css('margin-left'));

    //moving from left to right of the screen
    if(left > $('body').width() - $el.width() )
      HDirection = '-';
    else if(left < 0 )
      HDirection = '+';
    $('.hoop').css('margin-left', `${HDirection}=1px`);

    if(top > $('body').height() )
      VDirection = '-';
    else if(top < 0 )
      VDirection = '+';
    $('.ball').css('margin-top', `${VDirection}=1px`);
  });




});
