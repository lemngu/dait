const wrap = document.getElementById("wrap");
const categoryWrapper = document.getElementById("category");
const itemTemplate = document.getElementById("item-template");

const categoryItems = [];

fetch("../src/data/tools.json") // tool.html 위치 기준
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
                categoryItems.forEach((item) => item.classList.remove("active"));
                categoryItem.classList.add("active");

                const target = document.getElementById(`section-${index}`);
                if (target) {
                    const categoryHeight = categoryWrapper.offsetHeight;
                    const y =
                        target.getBoundingClientRect().top + window.pageYOffset - categoryHeight;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }
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


            section.appendChild(sectionTitle);
            section.appendChild(grid);
            wrap.appendChild(section);
        });
    });
