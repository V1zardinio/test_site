var choosedProduct = sessionStorage.getItem('choosedProduct');

if (choosedProduct == 0) {
    var productName = "IPhone 14";
    var productPrice = "52 990₽";
    var productImgFolder = "img/product/14/";
    var productDes = '<b>Экран: </b>6.1" (2532x1170) OLED 60 Гц<br><b>Память: </b>встроенная 128 ГБ, оперативная 6 ГБ<br><b>Фото: </b>основная камера 12 МП, двойная камера<br><b>Аккумулятор: </b>3279 мА·ч<br><b>Процессор: </b>Apple A15 Bionic';
    var colorButtons = `
        <div class="color-btns">
            <input type="radio" name="color" value="white" checked hidden id="white-color">
            <label for="white-color" class="color-radio-btn check">Сияющая звезда</label>
            <input type="radio" name="color" value="black" hidden id="black-color">
            <label for="black-color" class="color-radio-btn">Тёмная ночь</label>
        </div>
    `;
} else if (choosedProduct == 1) {
    var productName = "IPhone 14 PRO";
    var productPrice = "89 000₽";
    var productImgFolder = "img/product/14pro/";
    var productDes = '<b>Экран: </b>6.1" (2556x1179) OLED 120 Гц<br><b>Память: </b>встроенная 256 ГБ, оперативная 6 ГБ<br><b>Фото: </b>основная камера 48 МП, 3 камеры<br><b>Аккумулятор: </b>3200 мА·ч<br><b>Процессор: </b>Apple A16 Bionic';
    var colorButtons = `
        <div class="color-btns">
            <input type="radio" name="color" value="fiol" checked hidden id="fiol-color">
            <label for="fiol-color" class="color-radio-btn check">Фиолетовый</label>
            <input type="radio" name="color" value="white" hidden id="white-color">
            <label for="white-color" class="color-radio-btn">Белый</label>
        </div>
        <div class="color-btns">
            <input type="radio" name="color" value="gold" hidden id="gold-color">
            <label for="gold-color" class="color-radio-btn">Золотистый</label>
            <input type="radio" name="color" value="black" hidden id="black-color">
            <label for="black-color" class="color-radio-btn">Чёрный</label>
        </div>
    `;
}

const createProduct = () => {
    let product = document.querySelector('.product-card');

    product.innerHTML = `
        <section class="product-details">
            <div class="details">
                <h2 class="product-brand">${productName}</h2>
                <span class="product-price">${productPrice}</span>
            </div>

            <div class="image-slider" style="background-image: url('${productImgFolder}1.1.png');">
                <div class="product-images">
                    <img id="0" src="${productImgFolder}1.1.png" class="active" alt="">
                    <img id="1" src="${productImgFolder}1.2.png" alt="">
                    <img id="2" src="${productImgFolder}1.3.png" alt="">
                    <img id="3" src="${productImgFolder}1.4.png" alt="">
                </div>
            </div>

            <div class="details">

                <p class="product-sub-heading">Цвет</p>

                ${colorButtons}

                <button class="btn">Заказать</button>
            </div>
        </section>

        <section class="detail-des">
            <h2 class="heading">Характеристики</h2>
            <div class="des">
                ${productDes}
            </div>
        </section>
    `;
}

createProduct();

const productImages = document.querySelectorAll(".product-images img"); // selecting all image thumbs
const productImageSlide = document.querySelector(".image-slider"); // seclecting image slider element

let activeImageSlide = 0; // default slider image

productImages.forEach((item, i) => { // loopinh through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide = i; // updating the image slider variable to track current thumb
    })
})

const colorBtns = document.querySelectorAll('.color-radio-btn'); // selecting size buttons
let checkedBtn = 0; // current selected button

colorBtns.forEach((item, i) => { // looping through each button
    item.addEventListener('click', () => { // adding click event to each 
        colorBtns[checkedBtn].classList.remove('check'); // removing check class from the current button
        item.classList.add('check'); // adding check class to clicked button
        checkedBtn = i; // upading the variable

        productImageSlide.style.backgroundImage = `url('${productImgFolder}${i+1}.1.png')`;
        productImages[0].src=`${productImgFolder}${i+1}.1.png`;
        productImages[1].src=`${productImgFolder}${i+1}.2.png`;
        productImages[2].src=`${productImgFolder}${i+1}.3.png`;
        productImages[3].src=`${productImgFolder}${i+1}.4.png`;

        productImages[activeImageSlide].classList.remove('active');
        document.getElementById("0").classList.add('active');
        activeImageSlide = 0
    })
})