// header

let btn = document.getElementsByClassName('nav-button');
let par = document.getElementsByClassName('nav');
let shadow = document.getElementsByClassName('shadow');

btn[0].onclick = function() {
  par[0].classList.toggle("nav-column");
  shadow[0].classList.toggle("shadow-visible");
}

shadow[0].onclick = function() {
  par[0].classList.toggle("nav-column");
  shadow[0].classList.toggle("shadow-visible");
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
      breakpoint: 651,
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
let playButton = document.querySelector('.play-button');

if (video) {
    video.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        playButton.classList.add('play-button-hide');
    } else {
        video.pause();
        playButton.classList.remove('play-button-hide');
    }
  });
}

if(playButton) {
  playButton.addEventListener('click', function () {
    if(video.paused) {
      video.play();
      playButton.classList.add('play-button-hide');
    }
  });
}

// testimonials

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          centerMode: true,
          arrows: true,
          fade: false,
          slidesToShow: 3,
          centerPadding: '0',
        }
      },
      {
        breakpoint: 701,
        settings: {
          centerMode: true,
          arrows: true,
          fade: false,
          slidesToShow: 1,
          centerPadding: '0',
        }
      }
    ]
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

var Triggers = document.querySelectorAll('.members'),
    Contents = document.querySelectorAll('.details');
Triggers.forEach(function(trigger) {
   trigger.addEventListener('click', function() {
      var id = this.getAttribute('data-tab'),
          content = document.querySelector('.details[data-tab="'+id+'"]'),
          activeTrigger = document.querySelector('.members.active'),
          activeContent = document.querySelector('.details.active');
      
      activeTrigger.classList.remove('active');
      trigger.classList.add('active');
      
      activeContent.classList.remove('active');
      content.classList.add('active');

   });
});

$('.slider-members').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1171,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        arrows: true
      }
    },
    {
      breakpoint: 641,
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



