var estado = 0;
$('.bar-nav').on('click', function() {
    if (estado  == 0) {
      $('.btn-nav>span').removeClass('icon-menu');
      $('.btn-nav>span').addClass('icon-cross');
      $(this).css('left', 'calc(100% - 50px)');
      $('.navegacion').css('left', '0px');
      estado = 1;
    }else{
       $('.btn-nav>span').removeClass('icon-cross');
       $('.btn-nav>span').addClass('icon-menu');
      $(this).css('left', '0px');
      $('.navegacion').css('left', 'calc(-100% + 49px)');
      estado = 0;
    }
});