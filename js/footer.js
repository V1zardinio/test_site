const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/dark-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Главная</li>
                <li><a href="#" class="footer-link">Телефоны</a></li>
                <li><a href="#" class="footer-link">Часы</a></li>
                <li><a href="#" class="footer-link">Прочее</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">Наш магазин</p>
    <p class="info">С нашей помощью Вы можете быстро и удобно заказать интересующую Вас вещь, после чего с Вами свяжутся.</p>
    <a href="#" class="social-link">Telegram</a>
    <p class="footer-credit">Быстро, удобно, качественно.</p>
    `;
}

createFooter();