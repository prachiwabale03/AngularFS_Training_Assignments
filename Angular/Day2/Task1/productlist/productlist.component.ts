import { Component, Input, OnChanges } from '@angular/core';
import { Product } from '../../Models/Product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnChanges {
  @Input() category:string  = "";

  filteredArray:Product[] = [];

  productArray:Product[] = [
    {pid:1,pname:"Ball",price:3000,category:"Sports"},
    {pid:2,pname:"Bat",price:500,category:"Sports"},
    {pid:3,pname:"Mouse",price:300,category:"Electronics"},
    {pid:4,pname:"Laptop",price:30000,category:"Electronics"}
    ];
  


  ngOnChanges()
  {
    
    if(this.category == "")
      this.filteredArray = this.productArray;
    else
      this.filteredArray = this.productArray.filter(item => item.category == this.category);
  }


}
