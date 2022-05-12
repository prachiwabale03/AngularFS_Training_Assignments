import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()  productObj:any = {};
  @Output() onProductRemove = new EventEmitter<number>();

 public remove(pid: number)
 {
 
   this.onProductRemove.emit(pid);
 }
  

}


