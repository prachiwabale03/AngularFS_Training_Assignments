import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Models/Product';

@Component({
  selector: 'app-productcalculation',
  templateUrl: './productcalculation.component.html',
  styleUrls: ['./productcalculation.component.css']
})
export class ProductcalculationComponent implements OnInit {

  pname:string="";
  price:number=0;
  quantity:number=0;
  totalAmount:number=0;
  color:string="";
  
  
  public calculateTotal():void
  {

    this.totalAmount=this.price*this.quantity;
    if(this.totalAmount>10000)
    {
         this.color="green";
    }
    else{
         this.color="yellow";
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
