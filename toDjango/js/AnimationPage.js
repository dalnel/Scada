$(document).ready( function(){
    $modal_1 = $('.modal-frame_1');
    $modal_2 = $('.modal-frame_2');
    $overlay = $('.modal-overlay');

    /* Need this to clear out the keyframe classes so they dont clash with each other between ener/leave. Cheers. */
    $modal_1.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
      if($modal_1.hasClass('state-leave')) {
        $modal_1.removeClass('state-leave');
      }
    });
    $modal_2.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
      if($modal_2.hasClass('state-leave')) {
        $modal_2.removeClass('state-leave');
      }
    });

    $('.close').on('click', function(){
      $overlay.removeClass('state-show');
      $modal_1.removeClass('state-appear').addClass('state-leave');
      $modal_2.removeClass('state-appear').addClass('state-leave');
    });

    $('.open_1').on('click', function(){
      $overlay.addClass('state-show');
      $modal_1.removeClass('state-leave').addClass('state-appear');
    });

    $('.open_2').on('click', function(){
      $overlay.addClass('state-show');
      $modal_2.removeClass('state-leave').addClass('state-appear');
    });

  });
