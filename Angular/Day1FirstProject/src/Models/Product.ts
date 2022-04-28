export class Product
{
    pid:number=0;
    pname:string="";
    price:number=0;
    category:string="";
    qty:number=0;
    constructor( pid:number,pname:string,price:number,category:string, qty:number)
    {
       this.pid=pid;
       this.pname=pname;
       this.price=price;
       this.category=category;
       this.qty=qty;
    }
}