$(function () {
  // $(".top-slider").slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   speed: 300,
  //   infinite: true,
  // });

  //Бургер меню в мобилке
  $(".menu__btn").on("click", function () {
    $(".header__inner-bottom").toggleClass("header__inner-bottom--active");
  });

  //слайдеры
  $(".disc-wrapper").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 300,
    infinite: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".holiday-slider").slick({
    dots: true,
    arrows: false,
    infinite: false,
    // variableWidth: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
        },
      },
    ],
  });

  $(".news-s-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 300,
    infinite: false,
    variableWidth: true,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".camp-slider-inner").slick({});

  //открытие попапа
  $(".open-modal").click(function () {
    $(".block-popup, .overlay").fadeIn();
  });

  $(".block-popup span").click(function () {
    $(".block-popup, .overlay").fadeOut();
  });
});

//отзывы
function view1() {
  document.getElementById("block-1").style.cssText = `opacity: 1;
  z-index: 1; transition: opacity 0.5s ease-in-out;`;
  // document.getElementById("block-1").style.z-index = "1";
}
function none1() {
  document.getElementById("block-1").style.cssText = `opacity: 0;
  z-index: -1; transition: opacity 0.5s ease-in 0.5s;`;
}

function view2() {
  document.getElementById("block-2").style.cssText = `opacity: 1;
  z-index: 1; transition: opacity 0.5s ease-in-out;`;
  // document.getElementById("block-1").style.z-index = "1";
}
function none2() {
  document.getElementById("block-2").style.cssText = `opacity: 0;
  z-index: -1; transition: opacity 0.5s ease-in 0.5s;`;
}

function view3() {
  document.getElementById("block-3").style.cssText = `opacity: 1;
  z-index: 1; transition: opacity 0.5s ease-in-out;`;
  // document.getElementById("block-1").style.z-index = "1";
}
function none3() {
  document.getElementById("block-3").style.cssText = `opacity: 0;
  z-index: -1; transition: opacity 0.5s ease-in 0.5s;`;
}

function view4() {
  document.getElementById("block-4").style.cssText = `opacity: 1;
  z-index: 1; transition: opacity 0.5s ease-in-out;`;
  // document.getElementById("block-1").style.z-index = "1";
}
function none4() {
  document.getElementById("block-4").style.cssText = `opacity: 0;
  z-index: -1; transition: opacity 0.5s ease-in 0.5s;`;
}

function view5() {
  document.getElementById("block-5").style.cssText = `opacity: 1;
  z-index: 1; transition: opacity 0.5s ease-in-out;`;
  // document.getElementById("block-1").style.z-index = "1";
}
function none5() {
  document.getElementById("block-5").style.cssText = `opacity: 0;
  z-index: -1; transition: opacity 0.5s ease-in 0.5s;`;
}

//пагинация для новостей
class Pagination {
  constructor(dotsSelector) {
    this.dotsSelector = dotsSelector;

    this.maxLinks = 9;
    this.maxOffset = Math.ceil(this.maxLinks / 2);

    document.querySelector(this.dotsSelector).innerHTML = "";
  }

  generate(currentSlide, countSlides) {
    this.currentSlide = currentSlide + 1;
    this.countSlides = countSlides;

    this.offset_left = this.currentSlide > this.maxOffset;
    this.offset_right = this.currentSlide <= this.countSlides - this.maxOffset;

    if (this.countSlides > this.maxLinks) {
      if (this.currentSlide <= Math.floor(this.countSlides / 2)) {
        this.generateLeftPosition();
      } else if (this.currentSlide > Math.floor(this.countSlides / 2)) {
        this.generateRightPosition();
      }
    } else {
      this.generateDefault();
    }
  }

  generateDot(i, text, className = false, current = false) {
    var dot = document.createElement("li");

    if (className) {
      dot.classList.add(className);
    }

    if (i != "" && this.currentSlide == i) {
      dot.classList.add("active");
    }

    dot.id = i - 1;
    dot.innerText = text;

    document.querySelector(this.dotsSelector).appendChild(dot);
  }

  generateLeftPosition() {
    if (this.currentSlide != 1) {
      for (
        var i = this.currentSlide - 1;
        i < this.currentSlide - 1 + this.maxOffset;
        i++
      ) {
        this.generateDot(i, i, "dot");
      }
      this.generateDot("", "...");
      this.generateDot(this.countSlides, this.countSlides, "dot");
    } else {
      for (
        var i = this.currentSlide;
        i < this.currentSlide + this.maxOffset;
        i++
      ) {
        this.generateDot(i, i, "dot");
      }
      this.generateDot("", "...");
      this.generateDot(this.countSlides, this.countSlides, "dot");
    }
  }

  generateRightPosition() {
    if (this.currentSlide != this.countSlides) {
      this.generateDot(1, 1, "dot");
      this.generateDot("", "...");
      for (
        var i = this.currentSlide - 1;
        i < this.currentSlide - 1 + this.maxOffset;
        i++
      ) {
        this.generateDot(i, i, "dot");
      }
    } else {
      this.generateDot(1, 1, "dot");
      this.generateDot("", "...");
      for (
        var i = this.countSlides + 1 - this.maxOffset;
        i <= this.countSlides;
        i++
      ) {
        this.generateDot(i, i, "dot");
      }
    }
  }

  generateDefault() {
    for (var i = 1; i < this.countSlides + 1; i++) {
      this.generateDot(i, i, "dot");
    }
  }
}
$(document).ready(function () {
  if ($("#g2-slider")) {
    var g2Slider = $("#g2-slider");

    function addSliderListeners() {
      var dots = document.querySelectorAll(".dot");
      dots.forEach(function (el) {
        el.addEventListener("click", function () {
          g2Slider.slick("slickGoTo", el.id);
        });
      });
    }

    g2Slider.on("init", function (event, slick) {
      var pag = new Pagination("#g2-slider-pagination-list");
      pag.generate(slick.currentSlide, slick.slideCount);
      addSliderListeners();
    });

    g2Slider.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        var pag = new Pagination("#g2-slider-pagination-list");
        pag.generate(nextSlide, slick.slideCount);

        addSliderListeners();
      }
    );

    /* slider initialization */
    $(".all-news-slider").slick({
      infinite: false,
      adaptiveHeight: true,
      fade: true,
      speed: 500,
      cssEase: "linear",
      prevArrow: $(".g2-slider-pagination .prev"),
      nextArrow: $(".g2-slider-pagination .next"),
    });
  }
});

//фильтр для страницы о лагере
$(document).ready(function () {
  $(".projects_select").click(function () {
    var tab_id = $(this).attr("data-tab");
    $(".projects_select").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");

    $(".projects_select").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
});

// аккордион на странице FAQ
const accordion = document.getElementsByClassName("accordion-body");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
