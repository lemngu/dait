// script.js

// 카테고리별 랭킹 데이터
const rankingData = {
    'graphic': [
        { name: '툴 이름', tags: ['기타코딩', 'Lorem', 'Lorem'], source: 'GitHub' },
        { name: '툴 이름', tags: ['기타코딩', 'Lorem', 'Lorem'], source: 'Official' },
        { name: '툴 이름', tags: ['기타코딩', 'Lorem', 'Lorem'], source: 'Stack Overflow' },
        { name: '툴 이름', tags: ['기타코딩', 'Lorem', 'Lorem'], source: 'Medium' },
        { name: '툴 이름', tags: ['기타코딩', 'Lorem', 'Lorem'], source: 'Dev.to' }
    ],
    'illustration': [
        { name: 'Figma', tags: ['프로토타이핑', 'UI/UX', '협업'], source: 'figma.com' },
        { name: 'Sketch', tags: ['UI디자인', 'Mac전용', '벡터'], source: 'sketch.com' },
        { name: 'Adobe XD', tags: ['프로토타이핑', 'Adobe', '와이어프레임'], source: 'adobe.com' },
        { name: 'InVision', tags: ['프로토타이핑', '협업', '피드백'], source: 'invisionapp.com' },
        { name: 'Principle', tags: ['애니메이션', '인터랙션', 'Mac'], source: 'principleformac.com' }
    ],
    'ux-ui': [
        { name: 'After Effects', tags: ['모션그래픽', '애니메이션', 'VFX'], source: 'adobe.com' },
        { name: 'Cinema 4D', tags: ['3D모델링', '렌더링', '애니메이션'], source: 'maxon.net' },
        { name: 'Lottie', tags: ['웹애니메이션', 'JSON', '경량화'], source: 'lottiefiles.com' },
        { name: 'Blender', tags: ['3D모델링', '오픈소스', '렌더링'], source: 'blender.org' },
        { name: 'Rive', tags: ['인터랙티브', '실시간', '애니메이션'], source: 'rive.app' }
    ],
    '3d': [
        { name: 'Photoshop', tags: ['이미지편집', '포토레터칭', 'Adobe'], source: 'adobe.com' },
        { name: 'Illustrator', tags: ['벡터디자인', '로고제작', 'Adobe'], source: 'adobe.com' },
        { name: 'InDesign', tags: ['출판디자인', '레이아웃', 'Adobe'], source: 'adobe.com' },
        { name: 'Canva', tags: ['템플릿', '간편제작', '소셜미디어'], source: 'canva.com' },
        { name: 'Procreate', tags: ['디지털드로잉', 'iPad', '일러스트'], source: 'procreate.com' }
    ],
    // 두 번째 카테고리 세트
    'video': [
        { name: 'React', tags: ['라이브러리', 'JavaScript', 'SPA'], source: 'react.dev' },
        { name: 'Vue.js', tags: ['프레임워크', 'JavaScript', '반응형'], source: 'vuejs.org' },
        { name: 'Angular', tags: ['프레임워크', 'TypeScript', '엔터프라이즈'], source: 'angular.io' },
        { name: 'Svelte', tags: ['컴파일러', '경량', '성능'], source: 'svelte.dev' },
        { name: 'Next.js', tags: ['React', 'SSR', '풀스택'], source: 'nextjs.org' }
    ],
    'motion': [
        { name: 'Node.js', tags: ['JavaScript', '서버', '비동기'], source: 'nodejs.org' },
        { name: 'Django', tags: ['Python', '웹프레임워크', 'ORM'], source: 'djangoproject.com' },
        { name: 'Spring Boot', tags: ['Java', '마이크로서비스', 'RESTful'], source: 'spring.io' },
        { name: 'Express.js', tags: ['Node.js', '미니멀', 'API'], source: 'expressjs.com' },
        { name: 'FastAPI', tags: ['Python', '성능', 'OpenAPI'], source: 'fastapi.tiangolo.com' }
    ],
    'edition': [
        { name: 'PostgreSQL', tags: ['관계형', '오픈소스', 'ACID'], source: 'postgresql.org' },
        { name: 'MongoDB', tags: ['NoSQL', '문서형', '스케일링'], source: 'mongodb.com' },
        { name: 'Redis', tags: ['인메모리', '캐싱', 'Key-Value'], source: 'redis.io' },
        { name: 'MySQL', tags: ['관계형', '오픈소스', '웹개발'], source: 'mysql.com' },
        { name: 'Elasticsearch', tags: ['검색엔진', '분석', '로그'], source: 'elastic.co' }
    ]
};

// 카테고리 세트 정의
const categoryGroups = [
    {
        name: 'design',
        categories: [
            { key: 'graphic', name: '그래픽 디자이너' },
            { key: 'illustration', name: '일러스트레이터' },
            { key: 'ux-ui', name: 'UX/UI 디자이너' },
            { key: '3d', name: '3D 디자이너' }
        ]
    },
    {
        name: 'development',
        categories: [
            { key: 'video', name: '영상 디자이너' },
            { key: 'motion', name: '모션그래픽 디자이너' },
            { key: 'edition', name: '편집 디자이너' }
        ]
    }
];

// 현재 카테고리 그룹 인덱스
let currentGroupIndex = 0;

// DOM 요소들
const categoryTabs = document.querySelector('.category-tabs');
const rankingList = document.getElementById('rankingList');
const nextBtn = document.querySelector('.next-btn');

// 현재 활성 카테고리
let currentCategory = 'ux-ui';

// 카테고리 탭 HTML 생성 함수
function createCategoryTabs(categories) {
    // 기존 탭 버튼들 제거 (next-btn 제외)
    const existingTabs = categoryTabs.querySelectorAll('.tab-btn:not(.next-btn)');
    existingTabs.forEach(tab => tab.remove());
    
    // 새로운 탭 버튼들 생성
    categories.forEach((category, index) => {
        const tabBtn = document.createElement('button');
        tabBtn.className = 'tab-btn';
        tabBtn.setAttribute('data-category', category.key);
        tabBtn.textContent = category.name;
        
        // 첫 번째 탭을 활성화
        if (index === 0) {
            tabBtn.classList.add('active');
            currentCategory = category.key;
        }
        
        // next-btn 앞에 삽입
        categoryTabs.insertBefore(tabBtn, nextBtn);
        
        // 클릭 이벤트 추가
        tabBtn.addEventListener('click', () => {
            // 모든 탭에서 active 클래스 제거
            categoryTabs.querySelectorAll('.tab-btn:not(.next-btn)').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // 클릭된 탭에 active 클래스 추가
            tabBtn.classList.add('active');
            
            // 카테고리 업데이트
            currentCategory = category.key;
            
            // 랭킹 리스트 업데이트
            updateRankingList(currentCategory);
        });
    });
}

// 카테고리 그룹 전환 함수
function switchCategoryGroup() {
    // 다음 그룹으로 전환 (순환)
    currentGroupIndex = (currentGroupIndex + 1) % categoryGroups.length;
    
    // 새로운 카테고리 그룹의 탭들 생성
    const currentGroup = categoryGroups[currentGroupIndex];
    createCategoryTabs(currentGroup.categories);
    
    // 첫 번째 카테고리의 랭킹 표시
    updateRankingList(currentCategory);
}

// 랭킹 아이템 HTML 생성 함수
function createRankingItem(item, index) {
    const rankingNumber = index + 1;
    const tagsHTML = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    return `
        <div class="ranking-item">
            <div class="ranking-number">${rankingNumber}</div>
            <div class="tool-icon"></div>
            <div class="tool-info">
                <div class="tool-name">${item.name}</div>
                <div class="tool-tags">
                    ${tagsHTML}
                </div>
            </div>
            <a href="${item.source}" target="_blank" rel="noopener noreferrer">
                <div class="ranking-badge">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                </div>
            </a>
        </div>
    `;
}

// 랭킹 리스트 업데이트 함수
function updateRankingList(category) {
    const items = rankingData[category] || [];
    const rankingHTML = items.map((item, index) => createRankingItem(item, index)).join('');
    
    // 페이드 아웃 효과
    rankingList.style.opacity = '0';
    
    setTimeout(() => {
        rankingList.innerHTML = rankingHTML;
        // 페이드 인 효과
        rankingList.style.opacity = '1';
    }, 150);
}

// 탭 클릭 이벤트는 createCategoryTabs 함수 내에서 처리됩니다.

// 다음 버튼 클릭 이벤트
nextBtn.addEventListener('click', switchCategoryGroup);

// 초기 랭킹 리스트 로드
document.addEventListener('DOMContentLoaded', () => {
    // CSS 트랜지션 초기화
    rankingList.style.transition = 'opacity 0.3s ease';
    
    // 초기 카테고리 그룹 설정
    const initialGroup = categoryGroups[currentGroupIndex];
    createCategoryTabs(initialGroup.categories);
    
    // 초기 데이터 로드
    updateRankingList(currentCategory);
});

// 반응형 처리를 위한 리사이즈 이벤트
window.addEventListener('resize', () => {
    // 필요시 반응형 처리 로직 추가
});

// 랭킹 아이템 호버 효과 개선을 위한 이벤트 위임
rankingList.addEventListener('mouseenter', (e) => {
    if (e.target.closest('.ranking-item')) {
        e.target.closest('.ranking-item').style.transform = 'translateY(-4px)';
    }
}, true);

rankingList.addEventListener('mouseleave', (e) => {
    if (e.target.closest('.ranking-item')) {
        e.target.closest('.ranking-item').style.transform = 'translateY(0)';
    }
}, true);