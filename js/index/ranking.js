// script.js

// 카테고리별 랭킹 데이터
const rankingData = {
    'graphic': [
        { name: 'Adobe Photoshop', tags: ['이미지편집', '포토리터칭', '그래픽'], source: 'https://www.adobe.com/kr/products/photoshop.html', icon: '../../src/assets/images/index/ranking/graphic-1.png' },
        { name: 'Adobe Illustrator', tags: ['벡터', '로고제작', '일러스트'], source: 'https://www.adobe.com/products/illustrator.html', icon: '../../src/assets/images/index/ranking/graphic-2.png' },
        { name: 'Figma', tags: ['UI시안', '벡터툴', '협업'], source: 'https://www.figma.com/files/team/1493615205953617914/recents-and-sharing?fuid=1047483048297332924', icon: '../../src/assets/images/index/ranking/graphic-3.png' },
        { name: 'Canva', tags: ['SNS템플릿', '간편디자인', '프레젠테이션'], source: 'https://www.canva.com/ko_kr/', icon: '../../src/assets/images/index/ranking/graphic-4.png' },
        { name: 'Affinity Designer', tags: ['벡터디자인', '대체툴', '가성비'], source: 'https://affinity.serif.com/en-us/designer/?srsltid=AfmBOorLPmdl8TtkXacb8SRhKVrcen6Ju5guES98wEUN_dPp3gjK-GtL', icon: '../../src/assets/images/index/ranking/graphic-5.png' }
    ],

    'illustration': [
        { name: 'Adobe Illustrator', tags: ['벡터일러스트', '로고', '캐릭터'], source: 'https://www.adobe.com/products/illustrator.html', icon: '../../src/assets/images/index/ranking/illustration-1.png' },
        { name: 'Clip Studio Paint', tags: ['만화', '브러시', '펜툴'], source: 'https://www.clipstudio.net/kr/', icon: '../../src/assets/images/index/ranking/illustration-2.webp' },
        { name: 'Procreate', tags: ['iPad전용', '디지털드로잉', '일러스트'], source: 'https://procreate.com/', icon: '../../src/assets/images/index/ranking/illustration-3.webp' },
        { name: 'Adobe Photoshop', tags: ['브러시표현', '이미지합성', '컨셉아트'], source: 'https://www.adobe.com/kr/products/photoshop.html', icon: '../../src/assets/images/index/ranking/illustration-4.png' },
        { name: 'Krita', tags: ['무료툴', '디지털페인팅', '애니메이션'], source: 'https://krita.org/ko/', icon: '../../src/assets/images/index/ranking/illustration-5.png' }
    ],

    'ux-ui': [
        { name: 'Figma', tags: ['UI디자인', '프로토타이핑', '협업툴'], source: 'https://www.figma.com/files/team/1493615205953617914/recents-and-sharing?fuid=1047483048297332924', icon: '../../src/assets/images/index/ranking/ux-ui-1.png' },
        { name: 'Adobe XD', tags: ['와이어프레임', 'Adobe계열', 'UI툴'], source: 'https://helpx.adobe.com/kr/xd/get-started.html', icon: '../../src/assets/images/index/ranking/ux-ui-2.png' },
        { name: 'Sketch', tags: ['Mac전용', '디자인시스템', 'UI디자인'], source: 'https://www.sketch.com/', icon: '../../src/assets/images/index/ranking/ux-ui-3.png' },
        { name: 'ProtoPie', tags: ['인터랙션', '마이크로애니메이션', '국산툴'], source: 'https://www.protopie.io/', icon: '../../src/assets/images/index/ranking/ux-ui-4.png' },
        { name: 'Zeplin', tags: ['개발전달', '디자인핸드오프', '협업'], source: 'https://zeplin.io/', icon: '../../src/assets/images/index/ranking/ux-ui-5.png' }
    ],

    '3d': [
        { name: 'Blender', tags: ['3D모델링', '무료툴', '렌더링'], source: 'https://www.blender.org/', icon: '../../src/assets/images/index/ranking/3d-1.png' },
        { name: 'Cinema 4D', tags: ['모션그래픽', '3D애니메이션', '광고'], source: 'https://www.maxon.net/en/cinema-4d', icon: '../../src/assets/images/index/ranking/3d-2.png' },
        { name: 'Autodesk Maya', tags: ['애니메이션', '3D캐릭터', '프로툴'], source: 'https://www.autodesk.com/kr/products/maya/overview', icon: '../../src/assets/images/index/ranking/3d-3.png' },
        { name: 'ZBrush', tags: ['조형모델링', '스컬핑', '캐릭터'], source: 'https://www.maxon.net/ko/zbrush', icon: '../../src/assets/images/index/ranking/3d-4.png' },
        { name: 'Substance Painter', tags: ['텍스처링', '재질', 'PBR'], source: 'https://www.adobe.com/products/substance3d/apps/painter.html', icon: '../../src/assets/images/index/ranking/3d-5.png' }
    ],

    'video': [
        { name: 'Adobe Premiere Pro', tags: ['편집툴', '영상컷편집', 'Adobe'], source: 'https://www.adobe.com/kr/products/premiere.html', icon: '../../src/assets/images/index/ranking/video-1.png' },
        { name: 'Final Cut Pro', tags: ['Mac전용', '영상편집', '빠른렌더링'], source: 'https://www.apple.com/kr/final-cut-pro/', icon: '../../src/assets/images/index/ranking/video-2.png' },
        { name: 'DaVinci Resolve', tags: ['색보정', '편집툴', '무료프로버전'], source: 'https://www.blackmagicdesign.com/products/davinciresolve', icon: '../../src/assets/images/index/ranking/video-3.png' },
        { name: 'After Effects', tags: ['모션그래픽', '비디오이펙트', 'Adobe'], source: 'https://www.adobe.com/products/aftereffects.html', icon: '../../src/assets/images/index/ranking/video-4.png' },
        { name: 'CapCut', tags: ['SNS편집툴', '자막자동생성', '간편'], source: 'https://www.capcut.com/ko-kr', icon: '../../src/assets/images/index/ranking/video-5.png' }
    ],

    'motion': [
        { name: 'Adobe After Effects', tags: ['모션그래픽', '이펙트제작', '레이어기반'], source: 'https://www.adobe.com/products/aftereffects.html', icon: '../../src/assets/images/index/ranking/motion-1.png' },
        { name: 'Cinema 4D', tags: ['3D모션', 'AE연동', '광고디자인'], source: 'https://www.maxon.net/en/cinema-4d', icon: '../../src/assets/images/index/ranking/motion-2.png' },
        { name: 'Blender', tags: ['3D모션', '무료툴', '렌더링'], source: 'https://www.blender.org/', icon: '../../src/assets/images/index/ranking/motion-3.png' },
        { name: 'Adobe Animate', tags: ['2D애니메이션', '벡터기반', '인터랙션'], source: 'https://www.adobe.com/kr/products/animate.html', icon: '../../src/assets/images/index/ranking/motion-4.png' },
        { name: 'Toon Boom Harmony', tags: ['TV애니메이션', '프레임별작업', '프로툴'], source: 'https://www.toonboom.com/products/harmony', icon: '../../src/assets/images/index/ranking/motion-5.png' }
    ],

    'edition': [
        { name: 'Adobe InDesign', tags: ['출판디자인', '레이아웃', '편집툴'], source: 'https://www.adobe.com/kr/products/indesign.html', icon: '../../src/assets/images/index/ranking/edition-1.png' },
        { name: 'Adobe Illustrator', tags: ['타이포그래피', '표지디자인', '벡터'], source: 'https://www.adobe.com/products/illustrator.html', icon: '../../src/assets/images/index/ranking/edition-2.png' },
        { name: 'Adobe Photoshop', tags: ['이미지보정', '합성', '컷편집'], source: 'https://www.adobe.com/kr/products/photoshop.html', icon: '../../src/assets/images/index/ranking/edition-3.png' },
        { name: 'Affinity Publisher', tags: ['출판툴', '가성비', 'InDesign대체'], source: 'https://affinity.serif.com/en-gb/publisher/?srsltid=AfmBOooD530VicuYvuKw6lgJf1c8zptlpxwjBq8hvjlLl_E6WJpjzmxQ', icon: '../../src/assets/images/index/ranking/edition-4.png' },
        { name: 'QuarkXPress', tags: ['출판편집', '전통툴', '신문잡지'], source: 'https://www.quark.com/products/quarkxpress', icon: '../../src/assets/images/index/ranking/edition-5.png' }
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

// 아이콘 삽입 (중복 방지)
if (!nextBtn.querySelector('i')) {
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-chevron-right';
    nextBtn.appendChild(icon);
}

// 현재 활성 카테고리
let currentCategory = 'graphic';

function createCategoryTabs(categories) {
    // 기존 그룹 제거
    const existingGroup = categoryTabs.querySelector('.tab-group');
    if (existingGroup) existingGroup.remove();

    // 새 그룹 생성
    const tabGroup = document.createElement('div');
    tabGroup.className = 'tab-group';

    categories.forEach((category, index) => {
        const tabBtn = document.createElement('button');
        tabBtn.className = 'tab-btn';
        tabBtn.setAttribute('data-category', category.key);
        tabBtn.textContent = category.name;

        if (index === 0) {
            tabBtn.classList.add('active');
            currentCategory = category.key;
        }

        tabBtn.addEventListener('click', () => {
            categoryTabs.querySelectorAll('.tab-btn:not(.next-btn)').forEach(btn => btn.classList.remove('active'));
            tabBtn.classList.add('active');
            currentCategory = category.key;
            updateRankingList(currentCategory);
        });

        tabGroup.appendChild(tabBtn);
    });

    categoryTabs.insertBefore(tabGroup, nextBtn);
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

    const iconHTML = item.icon
        ? `<img src="${item.icon}" alt="${item.icon} 아이콘" class="tool-icon-img">`
        : '';

    return `
        <div class="ranking-item">
            <div class="ranking-number">${rankingNumber}</div>
            <div class="tool-icon">${iconHTML}</div>
            <div class="tool-info">
                <div class="tool-name">${item.name}</div>
                <div class="tool-tags">
                    ${tagsHTML}
                </div>
            </div>
            <a href="${item.source}" target="_blank" rel="noopener noreferrer">
                <div class="ranking-badge">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
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