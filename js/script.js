function main() {
    var productsCollection;
    
    /**
    * Generate array of products
    * @returns {array} products
    */
    function getProducts() {
        var products = [
            {
                name: "Blue Seven",
                desc: "Wickelbody 2er Pack",
                price: 19.99,
                img: "./graphics/product-1.png",
                link: "#"
            },
            {
                name: "Blue Seven",
                desc: "Wickelbody 2er Pack",
                price: 19.99,
                img: "./graphics/product-2.png",
                link: "#"
            },
            {
                name: "Queen Mom",
                desc: "Schwangerschaftscardigan Judy",
                price: 19.99,
                img: "./graphics/product-3.png",
                link: "#"
            },
            {
                name: "Blue Seven",
                desc: "Wickelbody 2er Pack",
                price: 19.99,
                img: "./graphics/product-4.png",
                link: "#"
            },
            {
                name: "Bornino Girls",
                desc: "Jacket Long name here",
                price: 19.99,
                img: "./graphics/product-5.png",
                link: "#"
            }
        ];
        return products;
    }
    
    /**
    * Display products on site
    * @param {array} products - array of products to display
    */
    function displayProducts(products) {
        var product, productHTML, productsContainer, lastSponsor;
        
        productsContainer = '';
        
        lastSponsor = document.getElementsByClassName('sponsor');
        lastSponsor = lastSponsor[lastSponsor.length - 1];
        
        for (var i = 0; i < products.length; i++) {
            
            product = products[i];
            
            productHTML = '<div class="tile product">' +
                            '<div class="tile-content">' +
                                '<img class="product-img" src="' + product.img + '">' +
                                '<h4 class="product-name">' + product.name + '</h4>' +
                                '<p class="product-desc">' + product.desc + "</p>" +
                                '<p class="product-price">' + convertToCurrency(product.price, '&euro;') + '</p>' +
                            '</div>' +
                            '<a class="product-link" href="' + product.link + '"></a>' +
                        '</div>';
            productsContainer += productHTML;
        }
        lastSponsor.insertAdjacentHTML('beforebegin', productsContainer);
    }
    
    /**
    * Convert number to currency string
    * @param {number} price - value to display
    * @param {string} currencySign
    * @param {boolean} ifBefore - position of curency sign (if truthy - sign before the price)
    * @returns {string} convertedStr - string after conversion
    */
    function convertToCurrency(price, currencySign, ifBefore) {
        var convertedStr;
        ifBefore = ifBefore || false;
        convertedStr = ifBefore ? currencySign + ' ' + price : price + ' ' + currencySign;
        return convertedStr;
    }
    
    productsCollection = getProducts();
    displayProducts(productsCollection);
}


main();