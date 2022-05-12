import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  result:string="";
  pname:string="";
  quantity:string="1";
  unitprice:string="0";
  amount:any;



  getTotalAmount()
  {
    this.amount=Number(this.quantity)*Number(this.unitprice);

    this.result="Total Amount for this product is:"+this.amount;
  }

}
