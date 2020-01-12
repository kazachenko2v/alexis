// header

var btn = document.getElementsByClassName('nav-button');
var par = document.getElementsByClassName('nav');
btn[0].onclick = function() {
  par[0].classList.toggle("nav-column");
}


// navigation

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

// services

$('.slider-services').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        arrows: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true
      }
    },
  ]
});

// video

let video = document.getElementById('video');
let playButton = document.querySelector('.play_button');

if (video) {
    video.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        playButton.classList.add('playx_button_hide');
    } else {
        video.pause();
        playButton.classList.remove('play_button_hide');
    }
  });
}

if(playButton) {
  playButton.addEventListener('click', function () {
    if(video.paused) {
      video.play();
      playButton.classList.add('play_button_hide');
    }
  });
}

// testimonials

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  arrows: false,
  dots: true,
  centerMode: true,
  centerPadding: '0',
  focusOnSelect: true
});

// team

$('.slider_details').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider_members'
});
$('.slider_members').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider_details',
  arrows: false,
  dots: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: true
      }
    },
    {
      breakpoint: 879,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: true
      }
    },
    {
      breakpoint: 586,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true
      }
    },
  ]
});

// pricing

$('.slider-price').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true
      }
    },
  ]
});



