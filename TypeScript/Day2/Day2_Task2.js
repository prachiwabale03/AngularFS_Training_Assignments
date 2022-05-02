var Product = /** @class */ (function () {
    function Product(productId) {
        this.productId = productId;
    }
    Object.defineProperty(Product.prototype, "ProductId", {
        get: function () {
            return this.productId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "ProductName", {
        get: function () {
            return this.productName;
        },
        set: function (value) {
            this.productName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "UnitPrice", {
        get: function () {
            return this.unitPrice;
        },
        set: function (value) {
            this.unitPrice = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "Quantity", {
        get: function () {
            return this.qty;
        },
        set: function (value) {
            this.qty = value;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var productObj = new Product(45645);
productObj.ProductName = "Ball"; //set
productObj.Quantity = 10; //set
productObj.UnitPrice = 12; //set
console.log("Product Id: " + productObj.ProductId); // get
console.log("Product Name: " + productObj.ProductName); // get
console.log("Product Quantity: " + productObj.Quantity); // get
console.log("Product UnitPrice: " + productObj.UnitPrice); // get
