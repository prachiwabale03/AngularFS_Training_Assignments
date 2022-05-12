import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  productObj1:Product=new Product(1,"Ball",100,"Sports",10);
  productObj2:Product=new Product(2,"TV",10000,"Electronics",10);
  productObj3:Product=new Product(3,"Bat",10008,"Sports",10);
  productObj4:Product=new Product(4,"racket",1001,"Sports",10);
  productObj5:Product=new Product(5,"Fan",100,"Electronics",10);
  productObj6:Product=new Product(6,"Cap",10,"Sports",10);
  productObj7:Product=new Product(7,"AC",150000,"Electronics",10);
  productObj8:Product=new Product(8,"Battery",1000,"Electronics",10);
  productObjs:Product[]=[this.productObj1,this.productObj2,this.productObj4,this.productObj5,this.productObj6,this.productObj7,this.productObj8];

  public  removeProduct(pid: number)
	{
		 var index =  this.productObjs.findIndex((x:any) => x.pid == pid);
		 this.productObjs.splice(index, 1);

	}
}
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
