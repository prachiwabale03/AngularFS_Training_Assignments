import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productObj1:Product=new Product(1,"Ball",100,"Sports",10);
  productObj2:Product=new Product(2,"TV",10000,"Electronics",10);
  productObj3:Product=new Product(3,"Bat",10008,"Sports",10);
  productObj4:Product=new Product(4,"racket",1001,"Sports",10);
  productObj5:Product=new Product(5,"Fan",100,"Electronics",10);
  productObj6:Product=new Product(6,"Cap",10,"Sports",10);
  productObj7:Product=new Product(7,"AC",150000,"Electronics",10);
  productObj8:Product=new Product(8,"Battery",1000,"Electronics",10);
  productObj:Product[]=[this.productObj1,this.productObj2,this.productObj4,this.productObj5,this.productObj6,this.productObj7,this.productObj8];

  constructor() { }

  ngOnInit(): void {
  }

}
