//메인 검색
// const headerEl = document.querySelector('header')
// const searchWrapEl = headerEl.querySelector('.search-wrap')
// const searchStarterEl = headerEl.querySelector('.search-starter')
// const searchShadowEl = searchWrapEl.querySelector('.shadow')

// searchStarterEl.addEventListener('click', showSearch)
// searchShadowEl.addEventListener('click',hideSearch)


// function showSearch() {
//   headerEl.classList.add('searching')
// }
// function hideSearch() {
//   headerEl.classList.remove('searching')
// }

const searchStarterEl = document.querySelector('header .fa-magnifying-glass');
const searchWrapEl = document.querySelector('.search-wrap');
const shadowEl = document.querySelector('.search .shadow');


searchStarterEl.addEventListener('click', function (event) {
  event.stopPropagation()
  if (searchWrapEl.classList.contains('show')) {
    hideSearch()
  } else {
    showSearch()
  }
})

window.addEventListener('click', function () {
  hideSearch()
})
searchWrapEl.addEventListener('click', function (event) {
  event.stopPropagation()
})

// .shadow 클릭 시 검색창 닫기
shadowEl.addEventListener('click', function () {
  hideSearch()
})

function showSearch() {
  searchWrapEl.classList.add('show')
}
function hideSearch() {
  searchWrapEl.classList.remove('show')
}

//floating

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector, delay, size) {
  gsap.to(
    selector,
    random(1.5, 2.5),
    {
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);
floatingObject('.floating4', 1, 15);
floatingObject('.floating5', .5, 15);
floatingObject('.floating6', 1.5, 20);
floatingObject('.floating7', 1, 15);
floatingObject('.floating8', .5, 15);

//curation swiper
new Swiper('.curation .swiper-container', {
  direction: 'vertical',
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  }
});


/**
 * 페이지 스크롤에 따른 요소 제어
 */
// 페이지 스크롤에 영향을 받는 요소들을 검색!
const toTopEl = document.querySelector('#to-top')
// 페이지에 스크롤 이벤트를 추가!
// 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 줌)
window.addEventListener('scroll', _.throttle(function () {
  // 페이지 스크롤 위치가 500px이 넘으면.
  if (window.scrollY > 500) {
    // 상단으로 스크롤 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    })

    // 페이지 스크롤 위치가 500px이 넘지 않으면.
  } else {
    // 상단으로 스크롤 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300))

// 상단으로 스크롤 버튼을 클릭하면,
// toTopEl.addEventListener('click', function () {
//   // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
//   gsap.to(window, .7, {
//     scrollTo: 0
//   })
// });

