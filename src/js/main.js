let menuBtn = document.querySelector('.menu__btn');
let menu = document.querySelector('.menu');
let menuWrapper = document.querySelector('.menu__wrapper');
let menuClose = document.querySelector('.menu__close');

if (menuBtn && menu) {
    menuBtn.addEventListener('click', ev => {
        menu.classList.add('_active');
        menuWrapper.classList.add('_active');
        document.body.classList.add('_no-scroll');
    })

    menuClose.addEventListener('click', ev => {
        menu.classList.remove('_active');
        menuWrapper.classList.remove('_active');
        document.body.classList.remove('_no-scroll');
    })
}