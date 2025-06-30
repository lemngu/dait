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


const circles = document.querySelectorAll(".circle");
const wrap = document.getElementById("wrap");
const category = document.getElementById("category");
const staticCategoryItem = document.querySelectorAll(".category-item");
const categoryWrapper = document.querySelector(".category-inner");
const itemTemplate = document.getElementById("item-template");
const header = document.querySelector("header");

let isScrollingByClick = false;
let scrollTimer = null;
const categoryItems = [];
const speeds = [0.2, 0.2, 0.2];

// Header + Category 높이 반환 함수 (스크롤 offset 통일용)
function getTotalOffset() {
    const headerHeight = header.offsetHeight;
    const categoryHeight = categoryWrapper.offsetHeight;
    return headerHeight + categoryHeight;
}

// 배경 요소 패럴랙스
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    circles.forEach((circle, index) => {
        const speed = speeds[index] || 0.2;
        circle.style.transform = `translateY(${-scrollY * speed}px)`;
    });
});

// 카테고리 blur 효과 스크롤 처리
window.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 0;

    category.classList.toggle("scrolled", scrolled);
    // 최신 .category-item들을 매번 선택 (동적 대응)
    document.querySelectorAll(".category-item").forEach((item) => {
        item.classList.toggle("scrolled", scrolled);
    });
});

// 카테고리, 콘텐츠 불러오기
fetch("./tools.json")
    .then((res) => res.json())
    .then((categories) => {
        categories.forEach((cat, index) => {
            // 카테고리 아이템 생성
            const categoryItem = document.createElement("div");
            categoryItem.className = "category-item";

            const icon = document.createElement("i");
            icon.className = cat.icon;

            const label = document.createElement("p");
            label.textContent = cat.title;

            categoryItem.append(icon, label);
            categoryWrapper.appendChild(categoryItem);
            categoryItems.push(categoryItem);

            if (index === 0) categoryItem.classList.add("active");

            // 클릭 시 섹션 이동 및 active 처리
            categoryItem.addEventListener("click", () => {
                isScrollingByClick = true;
                if (scrollTimer) clearTimeout(scrollTimer);

                // active 먼저 수동으로 고정
                categoryItems.forEach((item) => item.classList.remove("active"));
                categoryItem.classList.add("active");

                const target = document.getElementById(`section-${index}`);
                if (target) {
                    const y = target.getBoundingClientRect().top + window.pageYOffset - getTotalOffset();
                    window.scrollTo({ top: y, behavior: "smooth" });
                }

                // 스크롤 이벤트 무시 시간 넉넉하게 확보
                scrollTimer = setTimeout(() => {
                    isScrollingByClick = false;
                }, 800); // ← 여기 700보다 조금 더 길게
            });


            // 콘텐츠 섹션 생성
            const section = document.createElement("div");
            section.className = "section";
            section.id = `section-${index}`;

            const sectionTitle = document.createElement("h2");
            sectionTitle.textContent = cat.title;

            const grid = document.createElement("div");
            grid.className = "grid";

            cat.items.forEach((data) => {
                const itemClone = itemTemplate.content.cloneNode(true);

                // 썸네일
                itemClone.querySelector(".thumbnail").style.backgroundImage = `url(${data.thumbnail})`;

                const starIcon = itemClone.querySelector(".star-toggle");
                starIcon.addEventListener("click", (e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    if (starIcon.classList.contains("fa-regular")) {
                        starIcon.classList.remove("fa-regular");
                        starIcon.classList.add("fa-solid");
                    } else {
                        starIcon.classList.remove("fa-solid");
                        starIcon.classList.add("fa-regular");
                    }
                });

                // 제목
                itemClone.querySelector("h5").textContent = data.title;

                // 링크
                const linkElement = itemClone.querySelector(".thumbnail-link");
                linkElement.href = data.link;

                // 태그
                const tagList = itemClone.querySelector(".tag-list");
                tagList.innerHTML = "";
                data.tags.forEach((tagText) => {
                    const tag = document.createElement("div");
                    tag.className = "tag";
                    tag.textContent = tagText;
                    tagList.appendChild(tag);
                });

                // 설명
                itemClone.querySelector("p").textContent = data.description;

                grid.appendChild(itemClone);
            });

            section.append(sectionTitle, grid);
            wrap.appendChild(section);
        });

        // ✅ 스크롤 시 .active 처리
        window.addEventListener("scroll", () => {
            if (isScrollingByClick) return;

            const scrollPosition = window.pageYOffset;
            const totalOffset = getTotalOffset();
            let currentIndex = 0;

            categories.forEach((_, index) => {
                const section = document.getElementById(`section-${index}`);
                if (section) {
                    const sectionTop = section.offsetTop - totalOffset;
                    if (scrollPosition >= sectionTop) {
                        currentIndex = index;
                    }
                }
            });

            categoryItems.forEach((item, index) => {
                item.classList.toggle("active", index === currentIndex);
            });
        });
    });