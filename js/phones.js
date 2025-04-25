const products = document.querySelectorAll(".product-card");

var choosedProduct = 0;

products.forEach((item, i) => {
    item.addEventListener('click', () => {
    	choosedProduct = i;
		sessionStorage.setItem('choosedProduct', choosedProduct);
    	window.open('product.html', "_self")
    })
})
