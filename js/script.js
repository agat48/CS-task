function main() {
    var products;
    // generate array of products
    function getProducts() {
        var prods = [
            {
                name: "Blue Seven",
                desc: "Wickelbody 2er Pack",
                price: 19.99,
                img: "./graphics/product-1.png",
                link: "./"
            },
            {
                name: "Blue Seven",
                desc: "Wickelbody 2er Pack",
                price: 19.99,
                img: "./graphics/product-2.png",
                link: "./"
            },
            {
                name: "Queen Mom",
                desc: "Schwangerschaftscardigan Judy",
                price: 19.99,
                img: "./graphics/product-3.png",
                link: "./"
            },
            {
                name: "Blue Seven",
                desc: "Wickelbody 2er Pack",
                price: 19.99,
                img: "./graphics/product-4.png",
                link: "./"
            },
            {
                name: "Bornino Girls",
                desc: "Jacket Long name here",
                price: 19.99,
                img: "./graphics/product-5.png",
                link: "./"
            }
        ];
        return prods;
    }
    function displayProducts() {
        var img, name, desc, price, link,
            product, productClass, contentClass, imgClass, nameClass, descClass, priceClass, linkClass,
            productsContainer, lastSponsor;
        
        productsContainer = '';
        productClass = 'tile product';
        contentClass = 'tile-content';
        imgClass = 'producy-img';
        nameClass = 'product-name';
        descClass = 'product-desc';
        priceClass = 'product-price';
        linkClass = 'product-link';
        
        lastSponsor = document.getElementsByClassName('sponsor');
        lastSponsor = lastSponsor[lastSponsor.length - 1];
        
        for (var i = 0; i < products.length; i++) {
            
            img = products[i].img;
            name = products[i].name;
            desc = products[i].desc;
            price = products[i].price;
            link = products[i].link;
            
            product = '<div class="' + productClass + '">' +
                            '<div class="' + contentClass + '">' +
                                '<img class="' + imgClass + '" src="' + img + '">' +
                                '<h4 class="' + nameClass + '">' + name + '</h4>' +
                                '<p class="' + descClass + '">' + desc + "</p>" +
                                '<p class="' + priceClass + '">' + convertToCurrency(price, '&euro;') + '</p>' +
                            '</div>' +
                            '<a class="' + linkClass + '"></a>' +
                        '</div>';
            productsContainer += product;
        }
        lastSponsor.insertAdjacentHTML('beforebegin', productsContainer);
    }
    
    //convert number to currency string
    //ifBefore - position of curency sign (if truthy - sign before the price)
    function convertToCurrency(price, currencySign, ifBefore) {
        var convertedStr;
        convertedStr = ifBefore ? currencySign + ' ' + price : price + ' ' + currencySign;
        return convertedStr;
    }
    
    products = getProducts();
    displayProducts();
}


main();