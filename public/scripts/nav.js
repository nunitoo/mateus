const btn_menu_mobile = document.getElementById(`btn-menu-mobile`);

btn_menu_mobile.addEventListener('click', () => {
    const nav_menu = document.getElementById(`nav-menu`);
    nav_menu.classList.toggle('active');
})