class Customer
{
    public cid:number;
    public cname:string;
    public ccity:string;

    constructor(cid:number=0, cname:string = "", ccity:string = "")
    {
        this.cid = cid;
        this.cname = cname;
        this.ccity = ccity;
    }
  

    public showDetails():void
    {
        console.log(`Customer Details :: Id : ${this.cid}, Name : ${this.cname}, City : ${this.ccity}`);
        
        console.log("--------------------------------------------------------------------------------------");
    }
}


let c1:Customer = new Customer();

let c2:Customer = new Customer(10);

let c3:Customer = new Customer(20, "Prachi");

let c4:Customer = new Customer(30, "Supriya", "Pune");

c1.showDetails();
c2.showDetails();
c3.showDetails();
c4.showDetails();
