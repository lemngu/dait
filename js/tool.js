const circles = document.querySelectorAll(".circle");
const wrap = document.getElementById("wrap");
const category = document.getElementById('category');
const categoryWrapper = document.querySelector(".category-inner");
const itemTemplate = document.getElementById("item-template");
let isScrollingByClick = false;
let scrollTimer = null;

const categoryItems = [];

const speeds = [0.2, 0.2, 0.2]; 

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    circles.forEach((circle, index) => {
        const speed = speeds[index] || 0.2;
        circle.style.transform = `translateY(${-scrollY * speed}px)`;
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        category.classList.add('scrolled');
    } else {
        category.classList.remove('scrolled');
    }
});

fetch("./tools.json")
    .then((res) => res.json())
    .then((categories) => {
        categories.forEach((cat, index) => {
            // 카테고리 생성
            const categoryItem = document.createElement("div");
            categoryItem.className = "category-item";

            const icon = document.createElement("i");
            icon.className = cat.icon;

            const label = document.createElement("p");
            label.textContent = cat.title;

            categoryItem.appendChild(icon);
            categoryItem.appendChild(label);
            categoryWrapper.appendChild(categoryItem);
            categoryItems.push(categoryItem);

            if (index === 0) {
                categoryItem.classList.add("active");
            }

            // 클릭 시 해당 섹션으로 스크롤 + active 설정
            categoryItem.addEventListener("click", () => {
                isScrollingByClick = true;

                if (scrollTimer) clearTimeout(scrollTimer);

                categoryItems.forEach((item) => item.classList.remove("active"));
                categoryItem.classList.add("active");

                const target = document.getElementById(`section-${index}`);
                if (target) {
                    const categoryHeight = categoryWrapper.offsetHeight;
                    const y =
                        target.getBoundingClientRect().top + window.pageYOffset - categoryHeight;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }

                // 새 타이머 등록 (가장 마지막 클릭 기준)
                scrollTimer = setTimeout(() => {
                    isScrollingByClick = false;
                }, 700); // scroll 애니메이션 시간 고려
            });

            // 콘텐츠 생성
            const section = document.createElement("div");
            section.className = "section";
            section.id = `section-${index}`; // 스크롤 타겟도 여기로

            const sectionTitle = document.createElement("h2");
            sectionTitle.textContent = cat.title;

            const grid = document.createElement("div");
            grid.className = "grid";

            cat.items.forEach((data) => {
                const itemClone = itemTemplate.content.cloneNode(true);
                itemClone.querySelector(".thumbnail").style.backgroundImage = `url(${data.thumbnail})`;
                itemClone.querySelector("h5").textContent = data.title;

                // 링크 연결
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

            window.addEventListener("scroll", () => {
                if (isScrollingByClick) return; // 클릭 스크롤 중이면 무시

                const scrollPosition = window.pageYOffset;
                const categoryHeight = categoryWrapper.offsetHeight;

                let currentIndex = 0;

                categories.forEach((cat, index) => {
                    const section = document.getElementById(`section-${index}`);
                    if (section) {
                        const sectionTop = section.offsetTop - categoryHeight;

                        if (scrollPosition >= sectionTop) {
                            currentIndex = index;
                        }
                    }
                });

                // 활성화 토글
                categoryItems.forEach((item, index) => {
                    if (index === currentIndex) {
                        item.classList.add("active");
                    } else {
                        item.classList.remove("active");
                    }
                });
            });


            section.appendChild(sectionTitle);
            section.appendChild(grid);
            wrap.appendChild(section);
        });
    });
