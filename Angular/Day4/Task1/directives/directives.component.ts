import { Component, OnInit } from '@angular/core';
import {Product} from '../../Models/Product';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  displayMode:string  = "";

  productObj1:Product=new Product(1,"Ball",100,"Sports",10,"assets/ball.png");
  productObj2:Product=new Product(2,"TV",10000,"Electronics",10,"assets/tv.png");
  productObj3:Product=new Product(3,"Bat",10008,"Sports",10,"assets/bat.png");
  productObj4:Product=new Product(4,"racket",1001,"Sports",10,"assets/racket.png");
  productObj5:Product=new Product(5,"Fan",100,"Electronics",10,"assets/fan.png");
  productObj6:Product=new Product(6,"Cap",10,"Sports",10,"assets/cap.png");
  productObj7:Product=new Product(7,"AC",150000,"Electronics",10,"assets/ac.png");
  productObj8:Product=new Product(8,"Battery",1000,"Electronics",10,"assets/battery.png");
  productArray:Product[]=[this.productObj1,this.productObj2,this.productObj4,this.productObj5,this.productObj6,this.productObj7,this.productObj8];

  constructor() { }

  ngOnInit(): void {
  }

  set_Table()
  {
    this.displayMode="Table";
  }
  set_List()
  {
    this.displayMode="List";
  }

  set_Large()
  {
    this.displayMode="Large";
  }

  set_Small()
  {
    this.displayMode="Small";
  }

}
