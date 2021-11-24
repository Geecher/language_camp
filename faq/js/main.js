$(function () {
  // $(".top-slider").slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   speed: 300,
  //   infinite: true,
  // });


  $(".disc-wrapper").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 300,
    infinite: false,
    variableWidth: true,
  });

  $(".holiday-slider").slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  });

  $(".news-s-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 300,
    infinite: false,
    variableWidth: true,
    arrows: true,
    dots: false,
  });



  $(".camp-slider-inner").slick({});


  
});
