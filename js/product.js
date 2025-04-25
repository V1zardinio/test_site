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

// toggle size buttons

const colorBtns = document.querySelectorAll('.color-radio-btn'); // selecting size buttons
let checkedBtn = 0; // current selected button

colorBtns.forEach((item, i) => { // looping through each button
    item.addEventListener('click', () => { // adding click event to each 
        colorBtns[checkedBtn].classList.remove('check'); // removing check class from the current button
        item.classList.add('check'); // adding check class to clicked button
        checkedBtn = i; // upading the variable
        if (i == 0) {
            productImageSlide.style.backgroundImage = `url('img/product/14/14.1.png')`;
            document.getElementById("0").src='img/product/14/14.1.png';
            document.getElementById("1").src='img/product/14/14.2.png';
            document.getElementById("2").src='img/product/14/14.3.png';
            document.getElementById("3").src='img/product/14/14.4.png';

            productImages[activeImageSlide].classList.remove('active');
            document.getElementById("0").classList.add('active');
            activeImageSlide = 0
        } else if (i == 1) {
            productImageSlide.style.backgroundImage = `url('img/product/14/2.14.1.png')`;
            document.getElementById("0").src='img/product/14/2.14.1.png';
            document.getElementById("1").src='img/product/14/2.14.2.png';
            document.getElementById("2").src='img/product/14/2.14.3.png';
            document.getElementById("3").src='img/product/14/2.14.4.png';

            productImages[activeImageSlide].classList.remove('active');
            document.getElementById("0").classList.add('active');
            activeImageSlide = 0
        }
    })
})