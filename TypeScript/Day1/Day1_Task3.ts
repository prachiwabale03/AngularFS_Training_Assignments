
function CalculateAmount(price:number,quantity:number,discount:discountType,deliveryMode:string):number
{
    let ToatalAmount:number=price*quantity;
  
   
        ToatalAmount=ToatalAmount-(ToatalAmount*discount)/100;
    
    if(deliveryMode=="DeliveryToHome")
    {
        ToatalAmount=ToatalAmount+30;
    }

    return ToatalAmount;
}
enum discountType {NEW15=15,WEEKEND25=25}

let unitPrice:number=20;
let quantity:number=10;

let deliveryMode="DeliveryToHome";  //DeliveryToHome

let productName:string="Ball";

let discount:discountType=discountType.NEW15;


console.log("Toatl amount for product- "+productName +" is:"+ CalculateAmount(unitPrice,quantity,discountType["NEW15"],deliveryMode));
console.log("Toatl amount for product- "+productName +" is:"+ CalculateAmount(unitPrice,quantity,discountType["WEEKEND25"],deliveryMode));
