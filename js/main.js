"use strict";
// *** header ***
// header slideDown-Up
const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains(scrollDown)
  ) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});


// nav fadeIn-Out
const navbg = document.querySelector('.navleft');
const navbg2 = document.querySelector('.navright');
const navlogo = document.querySelector('.mainlogo');
const headerbg = document.querySelector('.headerbg');

navbg.addEventListener('mouseenter', function () {
  navaddcall();
});
navbg.addEventListener('mouseleave', function () {
  navremovecall();
});
navbg2.addEventListener('mouseenter', function () {
  navaddcall();
});
navbg2.addEventListener('mouseleave', function () {
  navremovecall();
});

function navaddcall() {
  navlogo.classList.add('logofade');
  headerbg.classList.add('headerslide');
}
function navremovecall() {
  navlogo.classList.remove('logofade');
  headerbg.classList.remove('headerslide');
}


// searchbt background fadeIn-Out
const searchbutton = document.querySelector('.search__btn');
const searchbackground = document.querySelector('.searchbg');
const searchbox = document.querySelector('.search__box');
const searchclose = document.querySelector('.search--close');
const searchfind = document.querySelector('.search--icon');

searchbutton.addEventListener("click", (event) => {
  event.preventDefault();
  searchbackground.classList.add('searchbg--show');
  searchbox.classList.add('searchbox--show');
  searchbackground.classList.remove('searchbg--hide');
  searchbox.classList.remove('searchbox--hide');
});

searchclose.addEventListener("click", (event) => {
  event.preventDefault();
  searchbackground.classList.add('searchbg--hide');
  searchbox.classList.add('searchbox--hide');
  searchbackground.classList.remove('searchbg--show');
  searchbox.classList.remove('searchbox--show');
});

searchfind.addEventListener("click", (event) => {
  event.preventDefault();
  alert("검색어를 입력해주세요.");
});


// sidemenu gnb slide
const sidemenuOpen = document.querySelector('.sidemenu__btn');
const sidemenugnb = document.querySelector('.sidemenu__gnb');
const sidemenuclose = document.querySelector('.sidemenu--close');
const windowscrollLock = document.body;

sidemenuOpen.addEventListener("click", (event) => {
  event.preventDefault();
  sidemenugnb.style.left = "0%";
  windowscrollLock.style.overflow = 'hidden'
});

sidemenuclose.addEventListener("click", (event) => {
  event.preventDefault();
  sidemenugnb.style.left = "100%";
  windowscrollLock.style.overflow = 'auto'
});


// sidemenu left
const sidemenuContents = document.querySelectorAll('.sidemenu__contents');
const sidemenuBtn = document.querySelectorAll('.sidemenu--maintext');
const sidemenuBg = document.querySelectorAll('.sidemenu__bg');
const sidemenuSub = document.querySelectorAll('.sidemenu__sub');
const sidemenuLine = document.querySelectorAll('.sidemenu__line>span');

for (let i = 0; i < sidemenuBtn.length; i++) {
  sidemenuBtn[i].addEventListener('mouseenter', (e) => {
    e.preventDefault();
    // Background Img
    sidemenuBg.forEach((items) => {
      items.classList.remove('active');
    });
    sidemenuBg[i].classList.add('active');
    sidemenuBg[i].style.transform = "scale(1.0)";      
    // Line
    sidemenuLine[i].classList.add('active');
    // Sub menu
    sidemenuSub.forEach((items) => {
      items.classList.remove('active');
    });
    sidemenuSub[i].classList.add('active');  
  });
  sidemenuContents[i].addEventListener('mouseleave', (e) => {
    e.preventDefault();
    // Background Img
    sidemenuBg.forEach((items) => {
      items.classList.remove('active');
      items.style.transform = "scale(1.035)";
    });
    sidemenuBg[0].classList.add('active');      
    // Line
    sidemenuLine[i].classList.remove('active');
    // Sub menu
    sidemenuSub.forEach((items) => {
      items.classList.remove('active');
    });
  });
}


// sidemenu animation
const sidemenuList = document.querySelectorAll('.sidemenu__list');
const sidemenuLink = document.querySelectorAll('.sidemenu__link');

document.addEventListener('DOMContentLoaded', function() {
  for (let n = 0; n < sidemenuContents.length; n++) {
    sidemenuContents[n].style.top = ('150px');
    sidemenuContents[n].style.opacity = ('0');
    sidemenuContents[n].style.transition = ('none');
  }    
  for (let i = 0; i < sidemenuList.length; i++) {
    sidemenuList[i].style.top = ('50px');
    sidemenuList[i].style.opacity = ('0');
    sidemenuList[i].style.transition = ('none');
  }    
  for (let a = 0; a < sidemenuLink.length; a++) {
    sidemenuLink[a].style.top = ('150px');
    sidemenuLink[a].style.opacity = ('0');
    sidemenuLink[a].style.transition = ('none');
  }
});

sidemenuOpen.addEventListener('click', () => {
  for (let n = 0; n < sidemenuContents.length; n++) {
    setTimeout(() => {
      sidemenuContents[n].style.top = ('0px');
      sidemenuContents[n].style.opacity = ('1');
      sidemenuContents[n].style.transition = ('all 1s');
    },(n + 1) * 100);
  }  
  for (let i = 0; i < sidemenuList.length; i++) {
  function sideList () {
      sidemenuList[i].style.top = ('0px');
      sidemenuList[i].style.opacity = ('1');
      sidemenuList[i].style.transition = ('all 1s');
    }
    setTimeout(sideList, (i + 1) * 100); 
  }  
  for (let a = 0; a < sidemenuLink.length; a++) {
    setTimeout(() => {
      sidemenuLink[a].style.top = ('0px');
      sidemenuLink[a].style.opacity = ('1');
      sidemenuLink[a].style.transition = ('all 1.3s');
    },(a + 1) * 200);
  }
});

sidemenuclose.addEventListener('click', () => {
  for (let n = 0; n < sidemenuContents.length; n++) {
    sidemenuContents[n].style.top = ('150px');
    sidemenuContents[n].style.opacity = ('0');
    sidemenuContents[n].style.transition = ('none');
  }    
  for (let i = 0; i < sidemenuList.length; i++) {
    sidemenuList[i].style.top = ('50px');
    sidemenuList[i].style.opacity = ('0');
    sidemenuList[i].style.transition = ('none');
  }    
  for (let a = 0; a < sidemenuLink.length; a++) {
    sidemenuLink[a].style.top = ('150px');
    sidemenuLink[a].style.opacity = ('0');
    sidemenuLink[a].style.transition = ('none');
  }    
});


// *** banner ***
var swiper__banner = new Swiper(".mySwiper--banner", {
  speed: 1000,
  navigation: {
    nextEl: ".banner-next",
    prevEl: ".banner-prev",
  },
});


// *** SI STORY ***
// thumb
var thumbs = new Swiper(".swiper-story-contents", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  width: '100%',
});

// banner swiper + bullet
var story__bullet = ['Material', 'Inspiration', 'Artist', 'View'];
var swiperBullet = new Swiper(".mySwiper-story", {
  speed: 1000,
  pagination: {
    el: '.swiper-story-bullet',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '"><span>' + (story__bullet[index]) + '</span></div>';
    }
  },
  navigation: {
    nextEl: '.story-next',
    prevEl: '.story-prev',
  },
  thumbs: {
    swiper: thumbs,
  },
});    


// *** SI COLLECTION ***
// swiper new
var swiper__new = new Swiper(".mySwiper-new", {
  spaceBetween: 100,
  speed: 1000,
  scrollbar: {
    el: ".new-scroll",
  },
  navigation: {
    nextEl: ".new-next",
    prevEl: ".new-prev",
  },
  observer: true, 
  observeParents: true,
});

// swiper best
var swiper__best = new Swiper(".mySwiper-best", {
  spaceBetween: 100,
  speed: 1000,
  scrollbar: {
    el: ".best-scroll",
  },
  navigation: {
    nextEl: ".best-next",
    prevEl: ".best-prev",
  },
  observer: true, 
  observeParents: true,
});

// tab swiper z-index 
const tab__btn = document.querySelectorAll('.tab__text>a');
const tab__slide = document.querySelectorAll('.tab__swiper');

for(let i = 0; i < tab__btn.length; i++) {
  tab__btn[i].addEventListener('click', (e) => {
    e.preventDefault();
    tab__btn.forEach((item) => {
      item.classList.remove('active');
    });
    tab__slide.forEach((item) => {
      item.classList.remove('active');
    });
    tab__btn[i].classList.add('active');
    tab__slide[i].classList.add('active');
  });
}


// *** SI NEWS ***
var news__bullet = ['장 미쉘 바스키야 특별전', '선인 엽서 공모전', '뉴스레터 102호'];
var swiperBullet = new Swiper(".mySwiper-news", {
  speed: 1000,
  pagination: {
    el: '.swiper-news-bullet',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '"><strong> EVENT </strong><br><span>' + (news__bullet[index]) + '</span></div>';
    }
  },
});    
