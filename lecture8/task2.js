// **Зробіть список користувачів веб магазину. І відтворіть основні етапи покупки товарів:**
//
// 1. **Інформацію про вибраного користувача**
// 2. **Додати в кошик товар**
// 3. **Вивести кошик товарів + ціна**
// 4. **Покупка товару
// Реалізуйте 2 способами через callback і через проміси.**

//callback
(function () {
    class Warehouse {
        constructor() {
            this.warehouse_products = [];
        }

        init() {
            const phone = new Product('Iphone 13', 'Apple', 850);
            const umbrella = new Product('umbrella', 'Xiaomi', 20);
            const teaPot = new Product('Teapot', 'Gorenje', 10);
            this.warehouse_products.push(
                phone, umbrella, teaPot
            );
        }

        async buyProduct(productToBuy, returningCallback) {
            const productIndex = this.warehouse_products.findIndex((product) => {
                    return productToBuy.productName === product.productName;
                }
            );
            const boughtProduct = this.warehouse_products[productIndex];
            this.warehouse_products.splice(productIndex, 1);
            returningCallback(boughtProduct);
        }

        async refundProduct(product) {
            this.warehouse_products.push(
                product
            );
        }

        printAvailableProducts() {
            console.table(this.warehouse_products);
        }

        async getProducts() {
            return this.warehouse_products;
        }
    }

    class Cart {
        constructor() {
            this.products = [];
        }

        clearCart() {
            this.products = [];
        }

    }

    class User {
        constructor(username, password) {
            this.username = username;
            this.password = password;
            this.cart = new Cart();
            this.boughtProducts = [];
        }

        getProductsList() {
            return this.cart.products;
        }

        printUserInfo() {
            console.log(`User ${this.username}, password ${this.password}`);
        }

        addProductInCart(product) {
            this.cart.products.push(product);
        }

        buyProducts(warehouseCallback) {
            const products = this.cart.products;
            for (const product of products) {
                warehouseCallback(product, this.addBoughtProduct.bind(this));
            }
        }

        addBoughtProduct(boughtProduct) {
            this.boughtProducts.push(boughtProduct);
        }

        getBoughtProducts() {
            return this.boughtProducts;
        }

        refundProduct(productName, warehouseCallback) {
            const productToRefund = this.boughtProducts.find((product) => {
                return product.productName === productName;
            });
            warehouseCallback(productToRefund);
        }
    }

    class Product {
        constructor(productName, manufacturer, price) {
            this.productName = productName;
            this.manufacturer = manufacturer;
            this.price = price;
        }

        printProductInfo() {
            console.log(`Product name ${this.productName}, manufacturer ${this.manufacturer}, price ${this.price}.`);
        }
    }

// warehouse init

    const WAREHOUSE = new Warehouse();
    WAREHOUSE.init();
//check that warehouse is full
    WAREHOUSE.printAvailableProducts();
// new user registration
    const user = new User('Ivan', 'MySuperSecretPassword');

// user add some product in cart
    const umbrella = new Product('umbrella', 'Xiaomi', 20);
    user.addProductInCart(umbrella);
// user buys product
    user.buyProducts(WAREHOUSE.buyProduct.bind(WAREHOUSE))
    console.log(user.getBoughtProducts());
//check that product was removed from warehouse
    WAREHOUSE.printAvailableProducts();
//user refund product
    user.refundProduct('umbrella', WAREHOUSE.refundProduct.bind(WAREHOUSE));
//check that product was refund
    WAREHOUSE.printAvailableProducts();
}());


//promise
(function () {
    class Warehouse {
        constructor() {
            this.warehouse_products = [];
        }

        init() {
            const phone = new Product('Iphone 13', 'Apple', 850);
            const umbrella = new Product('umbrella', 'Xiaomi', 20);
            const teaPot = new Product('Teapot', 'Gorenje', 10);
            this.warehouse_products.push(
                phone, umbrella, teaPot
            );
        }

        async buyProduct(productToBuy) {
            const productIndex = this.warehouse_products.findIndex((product) => {
                    return productToBuy.productName === product.productName;
                }
            );
            const boughtProduct = this.warehouse_products[productIndex];
            this.warehouse_products.splice(productIndex, 1);
            return boughtProduct;
        }

        async refundProduct(product) {
            this.warehouse_products.push(
                product
            );
            return product;
        }

        printAvailableProducts() {
            console.table(this.warehouse_products);
        }

        async getProducts() {
            return this.warehouse_products;
        }
    }

    class Cart {
        constructor() {
            this.products = [];
        }

        clearCart() {
            this.products = [];
        }

    }

    class User {
        constructor(username, password) {
            this.username = username;
            this.password = password;
            this.cart = new Cart();
            this.boughtProducts = [];
        }

        getProductsList() {
            return this.cart.products;
        }

        printUserInfo() {
            console.log(`User ${this.username}, password ${this.password}`);
        }

        addProductInCart(product) {
            this.cart.products.push(product);
        }

        async buyProducts(warehouse) {
            const products = this.cart.products;
            for (const product of products) {
                await warehouse.buyProduct(product);
            }
            return products;
        }

        refundProduct(productName) {
            return this.boughtProducts.find((product) => {
                return product.productName === productName;
            });
        }

        addBoughtProduct(boughtProduct) {
            this.boughtProducts.push(boughtProduct);
        }

        getBoughtProducts() {
            return this.boughtProducts;
        }
    }

    class Product {
        constructor(productName, manufacturer, price) {
            this.productName = productName;
            this.manufacturer = manufacturer;
            this.price = price;
        }

        printProductInfo() {
            console.log(`Product name ${this.productName}, manufacturer ${this.manufacturer}, price ${this.price}.`);
        }
    }

// warehouse init
    const WAREHOUSE = new Warehouse();
    WAREHOUSE.init();
//check that warehouse is full
    WAREHOUSE.printAvailableProducts();
// new user registration
    const user = new User('Ivan', 'MySuperSecretPassword');

// user add some product in cart
    const umbrella = new Product('umbrella', 'Xiaomi', 20);
    user.addProductInCart(umbrella);
// user buys product
    user.buyProducts(WAREHOUSE).then((boughtProducts) => {
        for (const product of boughtProducts) {
            user.addBoughtProduct(product)
        }

        console.log(user.getBoughtProducts());

        //check that product was removed from warehouse
        WAREHOUSE.printAvailableProducts();

        //user refund product
        const productToRefund = user.refundProduct('umbrella');
        WAREHOUSE.refundProduct(productToRefund).then((refunded) => {
            console.log(refunded);

            //check that product was refund
            WAREHOUSE.printAvailableProducts();
        });
    });
})();
