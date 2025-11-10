const btnBars = document.querySelector('.btn-bars');
const menuResponsive = document.querySelector('.menu-responsive');
const btnClose = document.querySelector('.btn-close');

btnBars.addEventListener('click', () => {
    menuResponsive.classList.toggle('active');
    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scroll'); // html
});

btnClose.addEventListener('click', () => {
    menuResponsive.classList.remove('active');
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
});

// Cerrar menú al hacer clic en cualquier enlace del menú
const menuLinks = document.querySelectorAll('.menu-responsive a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuResponsive.classList.remove('active');
        document.body.classList.remove('no-scroll');
        document.documentElement.classList.remove('no-scroll');
    });
});
