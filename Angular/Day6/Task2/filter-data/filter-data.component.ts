import { Component, OnInit } from '@angular/core';
import { FilterdataService } from '../filterdata.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filter-data',
  templateUrl: './filter-data.component.html',
  styleUrls: ['./filter-data.component.css']
})
export class FilterDataComponent implements OnInit {

  result: any[] = [];
  constructor(private dataService:FilterdataService) { }

  ngOnInit(): void {
  }

  getDataByJob_click()
  {
      return this.dataService.getEmpByJob("Tester").subscribe(resData=>{this.result=resData});

  }

  getDataByDept_click()
  {
    return this.dataService.getEmpNameByDept(40).subscribe(resData=>{this.result=resData});
  }

  getDataNameDesig_click()
  {
   return this.dataService.getEmpName_Job().subscribe(resData=>{this.result=resData});
  }

  getDataNotWorkingInDept_click()
  {
     return this.dataService.getEmpNotInDept(40).subscribe(res=>{this.result=res});
  }

  getDataSalary_Sort_click()
  {
    return this.dataService.getSortedEmpBySalary().subscribe(resData=>{this.result=resData});
  }

}
