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


new Swiper('.interview .swiper-container', {
    autoplay: true,
    spaceBetween: 24,
    loop: true,
    slidesPerView: 3
});


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


const newsData = [
    {
        title: "비타민워터, ‘대담한 미니멀리즘’으로 돌아오다",
        date: "2025.06.18",
        image: "../src/assets/images/curation/news/thumbnail-1.png"
    },
    {
        title: "디자이너의 야근을 줄이기 위한 추천 폰트",
        date: "2025.06.11",
        image: "../src/assets/images/curation/news/thumbnail-2.png"
    },
    {
        title: "2025 올해의 팬톤컬러 '모카무스'",
        date: "2025.06.04",
        image: "../src/assets/images/curation/news/thumbnail-3.png"
    },
    {
        title: "유튜브 로고 색상이 변경되었지만, 이제서야 사람들이 이를 알아차리고 있습니다",
        date: "2025.05.28",
        image: "../src/assets/images/curation/news/thumbnail-4.png"
    }
];

const newsGrid = document.getElementById("newsGrid");

const [mainNews, ...sideNews] = newsData;

const mainHTML = `
    <div class="news-main">
        <img src="${mainNews.image}" alt="${mainNews.title}">
        <div class="news-content">
        <h3>${mainNews.title}</h3>
        <p class="date">${mainNews.date}</p>
        </div>
    </div>
`;

const sideHTML = sideNews
    .map(
        (item) => `
    <div class="news-item">
        <img src="${item.image}" alt="${item.title}">
        <div class="news-content">
        <h4>${item.title}</h4>
        <p class="date">${item.date}</p>
        </div>
    </div>
`)
    .join("");

newsGrid.innerHTML = `
    <div class="news-left">${mainHTML}</div>
    <div class="news-right">${sideHTML}</div>
`;
