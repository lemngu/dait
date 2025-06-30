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



const category = document.getElementById("category");
const staticCategoryItem = document.querySelectorAll(".category-item");
const header = document.querySelector("header");
const categoryWrapper = document.querySelector(".category-inner");
const itemTemplate = document.getElementById("item-template");
const wrap = document.getElementById("wrap");


// Header + Category 높이 반환 함수 (스크롤 offset 통일용)
function getTotalOffset() {
    const headerHeight = header.offsetHeight;
    const categoryHeight = categoryWrapper.offsetHeight;
    return headerHeight + categoryHeight;
}

// 카테고리 blur 효과 스크롤 처리
window.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 0;

    category.classList.toggle("scrolled", scrolled);
    // 최신 .category-item들을 매번 선택 (동적 대응)
    document.querySelectorAll(".category-item").forEach((item) => {
        item.classList.toggle("scrolled", scrolled);
    });
});

let currentCategoryIndex = 0;
let allCategories = [];

fetch("./resources.json")
    .then((res) => res.json())
    .then((categories) => {
        allCategories = categories;
        renderCategories(categories);
        renderCategoryContent(currentCategoryIndex); // 첫 번째 카테고리 기본 표시
    });

// 카테고리 목록 생성
function renderCategories(categories) {
    categoryWrapper.innerHTML = ""; // 초기화

    categories.forEach((cat, index) => {
        const categoryItem = document.createElement("div");
        categoryItem.className = "category-item";
        if (index === 0) categoryItem.classList.add("active");

        const icon = document.createElement("i");
        icon.className = cat.icon;

        const label = document.createElement("p");
        label.textContent = cat.title;

        categoryItem.append(icon, label);
        categoryWrapper.appendChild(categoryItem);

        // 클릭 시 해당 카테고리 표시
        categoryItem.addEventListener("click", () => {
            // active 전환
            document.querySelectorAll(".category-item").forEach((el) => el.classList.remove("active"));
            categoryItem.classList.add("active");

            currentCategoryIndex = index;
            renderCategoryContent(index, 1);
        });
    });
}


// 콘텐츠 렌더링
const ITEMS_PER_PAGE = 9;
const paginationEl = document.querySelector(".pagination");

function renderCategoryContent(index, page = 1) {
    wrap.innerHTML = "";
    paginationEl.innerHTML = "";

    const cat = allCategories[index];
    const items = cat.items;
    const section = document.createElement("div");
    section.className = "section";

    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent = cat.title;

    const grid = document.createElement("div");
    grid.className = "grid";

    const isEmpty = items.length === 0;
    const totalPages = Math.max(1, Math.ceil(items.length / ITEMS_PER_PAGE));

    if (isEmpty) {
        // 더미 콘텐츠 1개만 표시
        const dummy = document.createElement("div");
        dummy.className = "item dummy-item";
        dummy.innerHTML = `
        <div class="thumbnail-frame">
            <div class="thumbnail" style="background: repeating-linear-gradient(135deg, #ddd, #ddd 10px, #eee 10px, #eee 20px);"></div>
        </div>
        <div class="content">
            <div class="content-title">
                <h5>자료 준비 중</h5>
                <div class="tag-list">
                    <div class="tag">COMING SOON</div>
                </div>
            </div>
            <p>해당 카테고리는 곧 업데이트될 예정입니다.</p>
        </div>
    `;
        grid.appendChild(dummy);
    } else {
        const start = (page - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        const paginatedItems = items.slice(start, end);

        paginatedItems.forEach((data) => {
            const itemClone = itemTemplate.content.cloneNode(true);

            itemClone.querySelector(".thumbnail").style.backgroundImage = `url(${data.thumbnail})`;
            itemClone.querySelector("h5").textContent = data.title;

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

            const linkElement = itemClone.querySelector(".thumbnail-link");
            linkElement.href = data.link;

            const tagList = itemClone.querySelector(".tag-list");
            tagList.innerHTML = "";
            data.tags.forEach((tagText) => {
                const tag = document.createElement("div");
                tag.className = "tag";
                tag.textContent = tagText;
                tagList.appendChild(tag);
            });

            itemClone.querySelector("p").textContent = data.description;
            grid.appendChild(itemClone);
        });
    }

    // 페이지네이션은 항상 표시
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.className = "page-btn";
        if (i === page) button.classList.add("active");

        button.addEventListener("click", () => {
            renderCategoryContent(index, i);
            scrollToTopOfContainer();
        });

        paginationEl.appendChild(button);
    }


    section.append(sectionTitle, grid);
    wrap.appendChild(section);
}