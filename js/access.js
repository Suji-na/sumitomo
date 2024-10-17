$(function(){
    $(".fancybox").fancybox({
        padding: 0,
        helpers: {
            title : {
                type : 'outside'
            }
        },
            buttons : [ 
      "close"
    ],
    });
});
// Modal
$(function(){
    $('.btn-map').on('click',function(){
      $('.modalMap').fadeIn();
    });
    $('.modalOverlay, .modalClose').on('click',function(){
      $('.modalMap').fadeOut();
    });
    
    $('.modalCont').bind('touchstart mousedown', function(){
      $('.modalSwipe').fadeOut();
    });
  });

  $(function(){
    $('.btn-map02').on('click',function(){
      $('.modalMap02').fadeIn();
    });
    $('.modalOverlay, .modalClose').on('click',function(){
      $('.modalMap02').fadeOut();
    });
    
    $('.modalCont').bind('touchstart mousedown', function(){
      $('.modalSwipe').fadeOut();
    });
  });