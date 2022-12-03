const burger = document.querySelector('.header_burger');
const menu = document.querySelector('.nav_list');
const burgerSpan = document.querySelector('.burger')
const navigationLink = document.querySelectorAll('.nav_link');

burger.addEventListener('click', toggleBurger)

function toggleBurger () {
    menu.classList.toggle('menu_active');
            burger.classList.toggle('active');
            burgerSpan.classList.toggle('active');
    }

for( let i = 0; i < navigationLink.length; i++) {
    navigationLink[i].addEventListener('click', function(event) {
        if (window.matchMedia('(max-width: 768px)').matches && menu.classList.contains('menu_active')) {
            menu.classList.toggle('menu_active');
            burger.classList.toggle('active') ;
            burgerSpan.classList.toggle('active');
            document.location = this.document.location + navigationLink[i].getAttribute('href');
            event.preventDefault();
        }
    });
}