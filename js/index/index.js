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
floatingObject('.floating1', 1, 10);
floatingObject('.floating2', .8, 10);
floatingObject('.floating3', 1.2, 10);
floatingObject('.floating4', 1, 10);
floatingObject('.floating5', .8, 10);
floatingObject('.floating6',  1.2, 10);



const btns = document.querySelectorAll('.card .btn');

btns.forEach(btn => {
  const dim = btn.nextElementSibling;
  btn.addEventListener('mouseenter', () => {
    dim.style.opacity = '1';
  });
  btn.addEventListener('mouseleave', () => {
    dim.style.opacity = '0';
  });

  console.log('호버됨')
});


// 큐레이션
const thumbList = document.getElementById('thumbList');
const mainImage = document.getElementById('mainSlideImage');
const slideBar = document.getElementById('slideBar');
const thumbs = Array.from(thumbList.querySelectorAll('.thumb'));
const thumbWidth = 160;
const gap = 12;
const totalCount = thumbs.length;

// 현재 썸네일들의 순서를 저장하는 배열
let currentOrder = [0, 1, 2, 3, 4]; // 초기 순서
let currentActiveIndex = 0; // 현재 활성화된 원본 인덱스 추가

// 메인 이미지 업데이트 함수
function updateMainImage(index) {
    // 실제 이미지 경로로 변경
    const imagePaths = [
        './src/assets/images/index/curation/curation-1.png',
        './src/assets/images/index/curation/curation-2.png',
        './src/assets/images/index/curation/curation-3.png',
        './src/assets/images/index/curation/curation-4.png',
        './src/assets/images/index/curation/curation-5.png'
    ];
    mainImage.src = imagePaths[index];
    mainImage.alt = `메인 슬라이드 ${index + 1}`;
}

// 슬라이드 바 업데이트 함수 (원래 썸네일 번호에 따라 위치 결정)
function updateSlideBar(originalIndex) {
    const wrapper = document.querySelector('.slide-bar-wrapper');
    const wrapperWidth = wrapper.getBoundingClientRect().width;

    const slideBarWidth = wrapperWidth / totalCount;
    const moveDistance = originalIndex * slideBarWidth;

    slideBar.style.transform = `translateX(${moveDistance}px)`;
}

// 썸네일 순서 재배치 함수
function reorderThumbnails(selectedIndex) {
    // 선택된 인덱스를 맨 앞으로, 나머지는 순환하여 배치
    const newOrder = [];

    // 선택된 인덱스부터 시작
    for (let i = 0; i < totalCount; i++) {
        newOrder.push((selectedIndex + i) % totalCount);
    }

    // DOM 요소들을 새로운 순서로 재배치
    newOrder.forEach((originalIndex, position) => {
        const thumb = thumbs[originalIndex];
        thumbList.appendChild(thumb);
    });

    // 현재 순서 업데이트
    currentOrder = newOrder;

    // transform을 0으로 리셋 (재배치했으므로)
    thumbList.style.transform = 'translateX(0px)';
}

let autoSlideInterval;

// 자동 슬라이드 시작
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        // 현재 활성화된 인덱스에서 다음 인덱스로 이동
        const nextIndex = (currentActiveIndex + 1) % totalCount;
        
        // 원본 썸네일 배열에서 직접 찾아서 클릭
        const targetThumb = thumbs[nextIndex];
        targetThumb.click();
    }, 3000);
}

// 사용자 클릭 시 자동 슬라이드 시간 리셋
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}
        
// 썸네일 클릭 이벤트
thumbs.forEach((thumb, originalIndex) => {
    thumb.addEventListener('click', () => {
        resetAutoSlide();

        // 현재 활성화된 인덱스 업데이트
        currentActiveIndex = originalIndex;

        updateMainImage(originalIndex);

        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');

        const currentPosition = currentOrder.indexOf(originalIndex);
        updateSlideBar(originalIndex);

        if (currentPosition === 0) return;

        // 🔥 여기서 썸네일 실제 너비와 gap 가져오기
        const thumbEl = thumbs[0]; // 아무 썸네일 하나 기준
        const thumbWidth = thumbEl.getBoundingClientRect().width;
        const computedStyle = window.getComputedStyle(thumbList);
        const gap = parseFloat(computedStyle.columnGap || computedStyle.gap || 12); // fallback 12

        const moveDistance = -currentPosition * (thumbWidth + gap);
        thumbList.style.transition = 'transform 0.3s ease';
        thumbList.style.transform = `translateX(${moveDistance}px)`;

        setTimeout(() => {
            thumbList.style.transition = 'none';
            reorderThumbnails(originalIndex);

            setTimeout(() => {
                thumbList.style.transition = 'transform 0.3s ease';
            }, 50);
        }, 300);
    });
});

// 초기 설정
updateMainImage(0);
updateSlideBar(0);
startAutoSlide();