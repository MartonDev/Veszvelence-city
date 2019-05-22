jQuery(function($) {

  $(document).ready(function() {

    $("#nav").fadeOut(30);

    $(".galery .galery-element").height($(".galery .galery-element").width());

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

    $(".watermark").click(function() {

      window.location.href = "index";

    });

  });

});

function openImage(number) {

  var pswpElement = document.querySelectorAll('.pswp')[0];

  var items = [

    {

      src: "assets/img/galery/1.png",
      w: 600,
      h: 400,
      title: "A hotel étterme"

    },

    {

      src: "assets/img/galery/2.png",
      w: 600,
      h: 400,
      title: "A hotel"

    },

    {

      src: "assets/img/galery/3.png",
      w: 600,
      h: 400,
      title: "Vesz Sound"

    },

    {

      src: "assets/img/galery/4.png",
      w: 600,
      h: 400,
      title: "Vesz Sound"

    },

    {

      src: "assets/img/galery/5.png",
      w: 600,
      h: 400,
      title: "A munka vására"

    },

    {

      src: "assets/img/galery/6.png",
      w: 600,
      h: 400,
      title: "A város közponja (vár)"

    },

    {

      src: "assets/img/galery/7.png",
      w: 600,
      h: 400,
      title: "Bérelhető ház"

    },

    {

      src: "assets/img/galery/8.png",
      w: 600,
      h: 400,
      title: "Bérelhető luxusház"

    }

  ];

  var options = {

    index: number

  };

  var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();

}
