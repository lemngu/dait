const searchStarterEl = document.querySelector('header .search-starter')
const searchWrapEl = document.querySelector('.search-wrap')



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
floatingObject('.floating2', .5, 45);
floatingObject('.floating3', 1.5, 20);
floatingObject('.floating4', 1, 15);
floatingObject('.floating5', .5, 35);
floatingObject('.floating6',  1.5, 20);
floatingObject('.floating7', 1, 15);
floatingObject('.floating8', .5, 15);

//curation swiper
new Swiper('.curation-main .swiper-container', {
  slidesPerView: 1, //한번에 보여줄 슬라이드 개수
  spaceBetween: 80, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 3000
  }
});

new Swiper('.curation-tumb  .swiper-container', {
  direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 10, // 슬라이드 사이 여백
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl: '.awards .swiper-next' // 다음 버튼 선택자
  }
})


/**
 * Promotion 슬라이드 토글 기능
 */
// 슬라이드 영역 요소 검색!
const promotionEl = document.querySelector('.promotion')
// 슬라이드 영역를 토글하는 버튼 검색!
const promotionToggleBtn = document.querySelector('.toggle-promotion')
// 슬라이드 영역 숨김 여부 기본값!
let isHidePromotion = false
// 토글 버튼을 클릭하면,
promotionToggleBtn.addEventListener('click', function () {
  // 슬라이드 영역 숨김 여부를 반댓값으로 할당!
  isHidePromotion = !isHidePromotion
  // 요소를 숨겨야 하면,
  if (isHidePromotion) {
    promotionEl.classList.add('hide')
  // 요소가 보여야 하면,
  } else {
    promotionEl.classList.remove('hide')
  }
})



