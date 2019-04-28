jQuery(function($) {

  $(document).ready(function() {

    $("#nav").fadeOut(30);

    $(window).scroll(function() {

      if($(window).scrollTop() > 40) {

        $("#nav").fadeIn(300);

      }else {

        $("#nav").fadeOut(300);

      }

    });

    $(".nav .menus .menu").hover(function() {

      $(this).find("ul").css("display", "block");

    }, function() {

      $(this).find("ul").css("display", "none");

    });

    $(".nav .menus").css("height", $("#nav").css("height"));

    $(".hero .scroll-down").click(function() {

      scrollTo($(".about"));

    });

  });

});
