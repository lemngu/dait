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