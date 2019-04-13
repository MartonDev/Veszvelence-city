jQuery(function($) {

  $(document).ready(function() {

    $(window).scroll(function() {

      if($(window).scrollTop() > 40) {

        $("#nav").addClass("shadow");

      }else {

        $("#nav").removeClass("shadow");

      }

    });

    $(".nav .menus .menu").hover(function() {

      $(this).find("ul").css("display", "block");

    }, function() {

      $(this).find("ul").css("display", "none");

    });

  });

});
