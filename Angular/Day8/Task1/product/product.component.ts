import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Product } from 'src/Models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
   filteredArray:Product[]=[];

  constructor(private route:ActivatedRoute,private router:Router) { }

  productArray:Product[] = [
    {pid:1,pname:"Ball",price:3000,category:"Sports"},
    {pid:2,pname:"Bat",price:500,category:"Sports"},
    {pid:3,pname:"Mouse",price:300,category:"Electronics"},
    {pid:4,pname:"Laptop",price:30000,category:"Electronics"}
    ];
  ngOnInit(): void {
    let categoryInput=this.route.snapshot.params["category"];
    if(categoryInput == "")
    this.filteredArray = this.productArray;
  else
    this.filteredArray = this.productArray.filter(item => item.category == categoryInput);
}

go_Back()
{
this.router.navigate(['/Categories']);
}
  }




