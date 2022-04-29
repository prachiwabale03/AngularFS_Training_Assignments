import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css'],
  // providers: [DataService]   // this is for component level injector registration
})
export class EmpListComponent implements OnInit
{

  empno:number=0;
  ename:string="";
  job:string="";
  sal:number=0;
  deptno:number=0;

  public empsArray:any[] = [
    {"empno":6589,"ename":"SRIRAM","job":"MANAGER","sal":3200,"deptno":30},
    {"empno":6369,"ename":"SMITH","job":"CLERK","sal":800,"deptno":20},
    {"empno":6499,"ename":"ALLEN","job":"SALESMAN","sal":1600,"deptno":30},
    {"empno":6521,"ename":"WARD","job":"ANALYST","sal":1250,"deptno":30},
    {"empno":6566,"ename":"JONES","job":"MANAGER","sal":2975,"deptno":20},
    {"empno":7654,"ename":"MARTIN","job":"SALESMAN","sal":1250,"deptno":30},
    {"empno":7698,"ename":"BLAKE","job":"MANAGER","sal":2850,"deptno":30},
    {"empno":7782,"ename":"CLARK","job":"MANAGER","sal":2450,"deptno":10}
    ];

    constructor(private _dataService:DataserviceService) { }

    ngOnInit()
    {
      this.getData_click();
    }

    getData_click()
    {
       this.empsArray = this._dataService.getEmpData();
    }
    addEmployee_click()
    {

      let empObj:any={"empno":this.empno,"ename":this.ename,"job":this.job,"sal":this.sal,"deptno":this.deptno};
 
      this._dataService.addEmpData(empObj);
      this.empno=0;
      this.ename="";
      this.job="";
      this.sal=0;
      this.deptno=0;
    }

    delete_click(empno:number)
    {
      if(confirm("Are you sure to delete this employee"))
      {
        this._dataService.removeEmpData(empno);
      }

  
    }

   
}