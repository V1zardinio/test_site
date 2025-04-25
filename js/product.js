function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const productsCount = 4

var product1 = ["IPhone 14", "52 990₽", "img/product/14/", '<b>Экран: </b>6.1" (2532x1170) OLED 60 Гц<br><b>Память: </b>встроенная 128 ГБ, оперативная 6 ГБ<br><b>Фото: </b>основная камера 12 МП, двойная камера<br><b>Аккумулятор: </b>3279 мА·ч<br><b>Процессор: </b>Apple A15 Bionic',
`<p class="product-sub-heading">Цвет</p>

<div class="color-btns">
    <input type="radio" name="color" value="white" checked hidden id="white-color">
    <label for="white-color" class="color-radio-btn check">Сияющая звезда</label>
    <input type="radio" name="color" value="black" hidden id="black-color">
    <label for="black-color" class="color-radio-btn">Тёмная ночь</label>
</div>`]

var product2 = ["IPhone 14 PRO", "89 000₽", "img/product/14pro/", '<b>Экран: </b>6.1" (2556x1179) OLED 120 Гц<br><b>Память: </b>встроенная 256 ГБ, оперативная 6 ГБ<br><b>Фото: </b>основная камера 48 МП, 3 камеры<br><b>Аккумулятор: </b>3200 мА·ч<br><b>Процессор: </b>Apple A16 Bionic',
`<p class="product-sub-heading">Цвет</p>

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
</div>`]

var product3 = ["IPhone 15", "59 990₽", "img/product/15/", '<b>Экран: </b>6.1" (2556x1179) OLED<br><b>Память: </b>встроенная 128 ГБ, оперативная 6 ГБ<br><b>Фото: </b>основная камера 48 МП, двойная камера<br><b>Процессор: </b>Apple A16 Bionic<br><b>SIM-карты: </b>Dual: nano SIM + eSIM',
`<p class="product-sub-heading">Цвет</p>

<div class="color-btns">
    <input type="radio" name="color" value="black" checked hidden id="black-color">
    <label for="black-color" class="color-radio-btn check">Чёрный</label>
    <input type="radio" name="color" value="blue" hidden id="blue-color">
    <label for="blue-color" class="color-radio-btn">Голубой</label>
</div>
<div class="color-btns">
    <input type="radio" name="color" value="green" hidden id="green-color">
    <label for="green-color" class="color-radio-btn">Зелёный</label>
    <input type="radio" name="color" value="pink" hidden id="pink-color">
    <label for="pink-color" class="color-radio-btn">Розовый</label>
</div>`]

var product4 = ["IPhone 15 PRO", "95 100₽", "img/product/15pro/", '<b>Экран: </b>6.1" (2556x1179) OLED 120 Гц<br><b>Память: </b>встроенная 256 ГБ, оперативная 8 ГБ<br><b>Фото: </b>основная камера 48 МП, 3 камеры<br><b>Процессор: </b>Apple A17 PRO<br><b>SIM-карты </b>Dual nano SIM',
`<p class="product-sub-heading">Цвет (титан)</p>

<div class="color-btns">
    <input type="radio" name="color" value="white" checked hidden id="white-color">
    <label for="white-color" class="color-radio-btn check">Белый</label>
    <input type="radio" name="color" value="gray" hidden id="gray-color">
    <label for="gray-color" class="color-radio-btn">Серый</label>
</div>
<div class="color-btns">
    <input type="radio" name="color" value="blue" hidden id="blue-color">
    <label for="blue-color" class="color-radio-btn">Синий</label>
</div>`]

var product5 = ["IPhone 16", "66 264₽", "img/product/16/", '<b>Экран: </b>6.1" (2556x1179) OLED 60 Гц<br><b>Память: </b>встроенная 128 ГБ, оперативная 8 ГБ<br><b>Фото: </b>основная камера 48 МП, двойная камера<br><b>Процессор: </b>Apple A18<br><b>SIM-карты </b>Dual: nano SIM + eSIM',
`<p class="product-sub-heading">Цвет</p>

<div class="color-btns">
    <input type="radio" name="color" value="black" checked hidden id="black-color">
    <label for="black-color" class="color-radio-btn check">Чёрный</label>
    <input type="radio" name="color" value="white" hidden id="white-color">
    <label for="white-color" class="color-radio-btn">Белый</label>
</div>
<div class="color-btns">
    <input type="radio" name="color" value="pink" hidden id="pink-color">
    <label for="pink-color" class="color-radio-btn">Розовый</label>
    <input type="radio" name="color" value="blue" hidden id="blue-color">
    <label for="blue-color" class="color-radio-btn">Ультрамарин</label>
</div>
<div class="color-btns">
    <input type="radio" name="color" value="turquoise" hidden id="turquoise-color">
    <label for="turquoise-color" class="color-radio-btn">Бирюзовый</label>
</div>`]

var product6 = ["IPhone 16 PRO", "108 000₽", "img/product/16pro/", '<b>Экран: </b>6.3" (2622x1206) OLED 120 Гц<br><b>Память: </b>встроенная 256 ГБ, оперативная 8 ГБ<br><b>Фото: </b>основная камера 48 МП, 3 камеры<br><b>Процессор: </b>Apple A18 PRO<br><b>SIM-карты </b>Dual eSIM',
`<p class="product-sub-heading">Цвет (титан)</p>

<div class="color-btns">
    <input type="radio" name="color" value="black" checked hidden id="black-color">
    <label for="black-color" class="color-radio-btn check">Чёрный</label>
    <input type="radio" name="color" value="desert" hidden id="desert-color">
    <label for="desert-color" class="color-radio-btn">Пустынный</label>
</div>
<div class="color-btns">
    <input type="radio" name="color" value="white" hidden id="white-color">
    <label for="white-color" class="color-radio-btn">Белый</label>
    <input type="radio" name="color" value="natural" hidden id="natural-color">
    <label for="natural-color" class="color-radio-btn">Природный</label>
</div>`]


if (document.querySelector('.product-card') != null) {
    var choosedProduct = sessionStorage.getItem('choosedProduct');

    if (choosedProduct == 0) {
        productInfo = product1
    } else if (choosedProduct == 1) {
        productInfo = product2
    } else if (choosedProduct == 2) {
        productInfo = product3
    } else if (choosedProduct == 3) {
        productInfo = product4
    } else if (choosedProduct == 4) {
        productInfo = product5
    } else if (choosedProduct == 5) {
        productInfo = product6
    }

    const createProduct = () => {
        let product = document.querySelector('.product-card');

        product.innerHTML = `
            <section class="product-details">
                <div class="details">
                    <h2 class="product-brand">${productInfo[0]}</h2>
                    <span class="product-price">${productInfo[1]}</span>
                </div>

                <div class="image-slider" style="background-image: url('${productInfo[2]}1.1.png');">
                    <div class="product-images">
                        <img id="0" src="${productInfo[2]}1.1.png" class="active" alt="">
                        <img id="1" src="${productInfo[2]}1.2.png" alt="">
                        <img id="2" src="${productInfo[2]}1.3.png" alt="">
                        <img id="3" src="${productInfo[2]}1.4.png" alt="">
                    </div>
                </div>

                <div class="details">

                    ${productInfo[4]}

                    <button class="btn">Заказать</button>
                </div>
            </section>

            <section class="detail-des">
                <h2 class="heading">Характеристики</h2>
                <div class="des">
                    ${productInfo[3]}
                </div>
            </section>`;
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

            productImageSlide.style.backgroundImage = `url('${productInfo[2]}${i+1}.1.png')`;
            productImages[0].src=`${productInfo[2]}${i+1}.1.png`;
            productImages[1].src=`${productInfo[2]}${i+1}.2.png`;
            productImages[2].src=`${productInfo[2]}${i+1}.3.png`;
            productImages[3].src=`${productInfo[2]}${i+1}.4.png`;

            productImages[activeImageSlide].classList.remove('active');
            document.getElementById("0").classList.add('active');
            activeImageSlide = 0
        })
    })
}