import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emp-sort-options',
  templateUrl: './emp-sort-options.component.html',
  styleUrls: ['./emp-sort-options.component.css']
})
export class EmpSortOptionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output()
  onIdClick:EventEmitter<string> = new EventEmitter();
  strOption:string  = "";

  sort_click()
  {
  
    this.onIdClick.emit(this.strOption);
  }

}
