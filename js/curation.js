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


const portfolioData = [
    {
        img: '../src/assets/images/curation/portfolio/thumbnail-1.png',
        alt: 'UX/UI 포트폴리오 유니클로 앱 리디자인',
        title: 'UX/UI 포트폴리오 유니클로 앱 디자인',
        profileImg: '../src/assets/images/curation/portfolio/profile/profile-2.png',
        author: '김혜수',
        likes: 211,
        tools: [
            '../src/assets/images/curation/portfolio/tool/psd.png',
            '../src/assets/images/curation/portfolio/tool/fig.png',
            '../src/assets/images/curation/portfolio/tool/ai.png'
        ]
    },
    {
        img: '../src/assets/images/curation/portfolio/thumbnail-2.png',
        alt: 'UXUI 포트폴리오 앱 구축 디자인',
        title: 'UX/UI 포트폴리오 한강 축제 웹 리디자인',
        profileImg: '../src/assets/images/curation/portfolio/profile/profile-2.png',
        author: '김혜수',
        likes: 83,
        tools: [
            '../src/assets/images/curation/portfolio/tool/psd.png',
            '../src/assets/images/curation/portfolio/tool/fig.png',
            '../src/assets/images/curation/portfolio/tool/ai.png'
        ]
    },
    {
        img: '../src/assets/images/curation/portfolio/thumbnail-3.png',
        alt: 'UXUI 포트폴리오 앱 구축 디자인',
        title: 'UXUI 포트폴리오 앱 구축 디자인',
        profileImg: '../src/assets/images/curation/portfolio/profile/profile-1.png',
        author: '방세준',
        likes: 71,
        tools: [
            '../src/assets/images/curation/portfolio/tool/psd.png',
            '../src/assets/images/curation/portfolio/tool/xd.png',
            '../src/assets/images/curation/portfolio/tool/ai.png'
        ]
    },
    {
        img: '../src/assets/images/curation/portfolio/thumbnail-4.png',
        alt: '그래픽디자인 포트폴리오',
        title: '그래픽디자인 포트폴리오',
        profileImg: '../src/assets/images/curation/portfolio/profile/profile-1.png',
        author: '방세준',
        likes: 248,
        tools: [
            '../src/assets/images/curation/portfolio/tool/psd.png',
            '../src/assets/images/curation/portfolio/tool/xd.png',
            '../src/assets/images/curation/portfolio/tool/ai.png'
        ]
    },
    {
        img: '../src/assets/images/curation/portfolio/thumbnail-5.png',
        alt: 'UX/UI 포트폴리오 앱 구축 디자인',
        title: 'UX/UI 포트폴리오 앱 구축 디자인',
        profileImg: '../src/assets/images/curation/portfolio/profile/profile-3.png',
        author: '이민규',
        likes: 150,
        tools: [
            '../src/assets/images/curation/portfolio/tool/psd.png',
            '../src/assets/images/curation/portfolio/tool/fig.png',
            '../src/assets/images/curation/portfolio/tool/ai.png'
        ]
    },
    {
        img: '../src/assets/images/curation/portfolio/thumbnail-6.png',
        alt: 'UXUI 포트폴리오 코레일 앱  리디자인',
        title: 'UXUI 포트폴리오 코레일 앱  리디자인',
        profileImg: '../src/assets/images/curation/portfolio/profile/profile-4.png',
        author: '배제윤',
        likes: 172,
        tools: [
            '../src/assets/images/curation/portfolio/tool/psd.png',
            '../src/assets/images/curation/portfolio/tool/fig.png',
            '../src/assets/images/curation/portfolio/tool/ai.png'
        ]
    },
    {
        img: '../src/assets/images/curation/portfolio/thumbnail-7.png',
        alt: '그래픽디자인 포트폴리오',
        title: '그래픽디자인 포트폴리오',
        profileImg: '../src/assets/images/curation/portfolio/profile/profile-2.png',
        author: '김혜수',
        likes: 741,
        tools: [
            '../src/assets/images/curation/portfolio/tool/psd.png',
            '../src/assets/images/curation/portfolio/tool/xd.png',
            '../src/assets/images/curation/portfolio/tool/ai.png'
        ]
    },
    {
        img: '../src/assets/images/curation/portfolio/thumbnail-8.png',
        alt: 'UXUI 포트폴리오 비비드 키친 웹 리디자인',
        title: 'UXUI 포트폴리오 비비드 키친 웹 리디자인',
        profileImg: '../src/assets/images/curation/portfolio/profile/profile-3.png',
        author: '이민규',
        likes: 341,
        tools: [
            '../src/assets/images/curation/portfolio/tool/psd.png',
            '../src/assets/images/curation/portfolio/tool/fig.png',
            '../src/assets/images/curation/portfolio/tool/ai.png'
        ]
    }
];

const portfolioList = document.getElementById('portfolioList');

portfolioData.forEach((item, index) => {
    const html = `
    <div class="portfolio-item" data-index="${index}">
        <div class="thumbnail-wrapper">
            <img src="${item.img}" alt="${item.alt}" />
            <div class="thumbnail-overlay">
                <div class="tool-icons">
                ${item.tools.map(tool => `<img src="${tool}" alt="툴 아이콘" class="tool-icon" />`).join('')}
                </div>
            </div>
        </div>

        <p class="title">${item.title}</p>
        <div class="meta">
            <div class="author-info">
                <img src="${item.profileImg}" alt="${item.author} 프로필 이미지" class="profile-img" />
                <span class="author">${item.author}</span>
            </div>
            <span class="likes" data-liked="false">
            <i class="fa-regular fa-heart"></i> 
            <span class="like-count">${item.likes}</span>
            </span>
        </div>
    </div>
    `;
    portfolioList.insertAdjacentHTML('beforeend', html);
});

// 좋아요 클릭 기능
portfolioList.addEventListener('click', (e) => {
    const likeWrapper = e.target.closest('.likes');
    if (!likeWrapper) return;

    const icon = likeWrapper.querySelector('i');
    const countEl = likeWrapper.querySelector('.like-count');
    let liked = likeWrapper.dataset.liked === 'true';

    if (!liked) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
        countEl.textContent = parseInt(countEl.textContent) + 1;
        likeWrapper.dataset.liked = 'true';
    } else {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
        countEl.textContent = parseInt(countEl.textContent) - 1;
        likeWrapper.dataset.liked = 'false';
    }
});


// 인터뷰
const interviewItems = [
    {
        thumbnail: "/src/assets/images/curation/interview/thumbnail/interview-1.png",
        title: "하라 켄야, 말과 여백 사이",
        description: "여백, 감각, 그리고 생각. 사물을 넘어 사고를 디자인한 하라 켄야의 인터뷰.",
        date: "2025.06.29",
        link: "/interview.html"
    },
    {
        thumbnail: "/src/assets/images/curation/interview/thumbnail/interview-2.png",
        title: "멘디니, 그가 남긴 문장들",
        description: "디자인 너머, 감정과 철학을 말하던 멘디니의 기록들. 그가 남긴 말들을 모아 다시 읽습니다.",
        date: "2025.06.22",
        link: "#"
    },
    {
        thumbnail: "/src/assets/images/curation/interview/thumbnail/interview-3.png",
        title: "데이비드 카슨, 타이포그래피의 경계를 넘다",
        description: "질서를 해체한 타이포그래퍼, 데이비드 카슨의 인터뷰를 모아보았습니다.",
        date: "2025.06.15",
        link: "#"
    },
    {
        thumbnail: "/src/assets/images/curation/interview/thumbnail/interview-4.png",
        title: "요시다 유니의 현실을 닮은 환상",
        description: "CG가 아닌 실제 재료, 수작업이 주는 열정과 발견의 아름다움. 현실 속 불가사의를 좇는 디자이너, 요시다 유니의 창작 철학",
        date: "2025.06.08",
        link: "#"
    },
    {
        thumbnail: "/src/assets/images/curation/interview/thumbnail/interview-5.png",
        title: "브랜드가 아닌 이름으로: 디자이너 우영미",
        description: "파리에서 자신의 이름을 내건 최초의 한국 디자이너, 우영미가 말하는 정체성, 우아함, 그리고 본질의 힘",
        date: "2025.06.01",
        link: "#"
    }
];

const swiperWrapper = document.querySelector('.interview .swiper-wrapper');
swiperWrapper.innerHTML = ''; // 초기화

interviewItems.forEach(item => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');

    slide.innerHTML = `
        <a href="${item.link}" class="interview-link" target="_blank">
            <div class="thumbnail">
                <img src="${item.thumbnail}" alt="${item.title}" />
            </div>
            <div class="content">
                <div class="text-wrap">
                    <h3 class="title">${item.title}</h3>
                    <p class="description">${item.description}</p>
                </div>
                <span class="date">${item.date}</span>
            </div>
        </a>
    `;

    swiperWrapper.appendChild(slide);
});

// 슬라이드 기능
new Swiper('.interview .swiper-container', {
    autoplay: true,
    spaceBetween: 24,
    loop: true,
    slidesPerView: 3
});


// 뉴스
const newsData = [
    {
        title: "비타민워터, ‘대담한 미니멀리즘’으로 돌아오다",
        date: "2025.06.18",
        summary: "비타민워터가 미니멀한 디자인으로 리브랜딩을 단행했다. 선명한 컬러와 심플한 타이포로 정제된 브랜드 이미지를 구축했다.",
        image: "../src/assets/images/curation/news/thumbnail-1.png",
        link: "/news.html"
    },
    {
        title: "디자이너의 야근을 줄이기 위한 추천 폰트",
        date: "2025.06.11",
        summary: "작업 속도를 높여주는 무료 폰트 10종을 소개한다. 시인성 중심의 서체로 디자이너들의 야근을 줄여준다.",
        image: "../src/assets/images/curation/news/thumbnail-2.png",
        link: "#"
    },
    {
        title: "2025 올해의 팬톤컬러 '모카무스'",
        date: "2025.06.04",
        summary: "따뜻한 브라운 톤의 ‘모카무스’가 팬톤컬러로 선정됐다. 감성과 연결을 강조하는 디자인 트렌드를 반영한다.",
        image: "../src/assets/images/curation/news/thumbnail-3.png",
        link: "#"
    },
    {
        title: "유튜브 로고 색상이 변경되었지만, 이제서야 사람들이 이를 알아차리고 있습니다",
        date: "2025.05.28",
        summary: "유튜브가 로고 색상을 미묘하게 변경했다. 접근성과 색 대비 향상을 위한 전략적 조정이다.",
        image: "../src/assets/images/curation/news/thumbnail-4.png",
        link: "#"
    }
];

const [mainNews, ...sideNews] = newsData;

const mainHTML = `
    <a href="${mainNews.link}" class="news-main">
        <div class="thumbnail-frame">
            <img src="${mainNews.image}" alt="${mainNews.title}">
        </div>
        <div class="news-content">
            <div class="news-header">
                <h3>${mainNews.title}</h3>
                <p class="date">${mainNews.date}</p>
            </div>
            <p class="summary">${mainNews.summary}</p>
        </div>
    </a>
`;

const sideHTML = sideNews
    .map(
        (item) => `
        <a href="${item.link}" class="news-item">
            <div class="thumbnail-frame">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="news-content">
                <div class="news-header">
                    <h4>${item.title}</h4>
                    <p class="date">${item.date}</p>
                </div>
                <p class="summary">${item.summary}</p>
            </div>
        </a>
    `
    )
    .join("");

newsGrid.innerHTML = `
    <div class="news-left">${mainHTML}</div>
    <div class="news-right">${sideHTML}</div>
`;