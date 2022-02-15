const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    // пагинация
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    // навигация
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

document.querySelectorAll('.stages__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;
        document.querySelectorAll('.stages__btn').forEach(function(btn) {
            btn.classList.remove('stages__btn_active')
        });
        e.currentTarget.classList.add('stages__btn_active')

        document.querySelectorAll('.stages__content').forEach(function(tabsBtn) {
            tabsBtn.classList.remove('stages__content_active')
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('stages__content_active');
    });
});
$(".accordion").accordion({
    heightStyle: "content",
    collapsible: true,
    icons: false
});
document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
})
document.querySelector('#x').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
})
document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu-list').classList.toggle('menu-is-active')
})
document.querySelector('#x').addEventListener('click', function() {
    document.querySelector('#menu-list').classList.toggle('menu-is-active')
})
document.querySelector('#search').addEventListener('click', function() {
    document.querySelector('#form').classList.toggle('is-active')
})
document.querySelector('#form-closed').addEventListener('click', function() {
    document.querySelector('#form').classList.toggle('is-active')
})
