function CalculateAmount(price, quantity, discount, deliveryMode) {
    var ToatalAmount = price * quantity;
    ToatalAmount = ToatalAmount - (ToatalAmount * discount) / 100;
    if (deliveryMode == "DeliveryToHome") {
        ToatalAmount = ToatalAmount + 30;
    }
    return ToatalAmount;
}
var discountType;
(function (discountType) {
    discountType[discountType["NEW15"] = 15] = "NEW15";
    discountType[discountType["WEEKEND25"] = 25] = "WEEKEND25";
})(discountType || (discountType = {}));
var unitPrice = 20;
var quantity = 10;
var deliveryMode = "DeliveryToHome"; //DeliveryToHome
var productName = "Ball";
var discount = discountType.NEW15;
console.log("Toatl amount for product- " + productName + " is:" + CalculateAmount(unitPrice, quantity, discountType["NEW15"], deliveryMode));
console.log("Toatl amount for product- " + productName + " is:" + CalculateAmount(unitPrice, quantity, discountType["WEEKEND25"], deliveryMode));
