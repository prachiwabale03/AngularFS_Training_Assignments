class Product
{
    private productId:number ;
    private productName:string ;
    private unitPrice:number;
    private qty:number;



    constructor(productId:number)
    {
        this.productId = productId;
    }

    public get ProductId():number
    {
        return this.productId;
    }
 

    public get ProductName():string
    {
        return this.productName;
    }
 
    public set ProductName(value:string)
    {
        this.productName = value;
    }

    public get UnitPrice():number
    {
        return this.unitPrice;
    }
 
    public set UnitPrice(value:number)
    {
        this.unitPrice = value;
    }

    public get Quantity():number
    {
        return this.qty;
    }
 
    public set Quantity(value:number)
    {
        this.qty = value;
    }
}


let productObj:Product = new Product(45645);

productObj.ProductName = "Prachi";  //set

productObj.Quantity = 10;  //set

productObj.UnitPrice=12;   //set


console.log("Product Id: " + productObj.ProductId);  // get
console.log("Product Name: " + productObj.ProductName);  // get
console.log("Product Quantity: " + productObj.Quantity);  // get
console.log("Product UnitPrice: " + productObj.UnitPrice);  // get
