const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">Главная</a></li>
            <li class="link-item"><a href="#" class="link">Телефоны</a></li>
            <li class="link-item"><a href="#" class="link">Часы</a></li>
            <li class="link-item"><a href="#" class="link">Прочее</a></li>
        </ul>
    `;
}

createNav();
