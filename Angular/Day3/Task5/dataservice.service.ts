import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  
  dataArray:any[] = [
    {"empno":6589,"ename":"SRIRAM","job":"MANAGER","sal":3200,"deptno":30},
    {"empno":6369,"ename":"SMITH","job":"CLERK","sal":800,"deptno":20},
    {"empno":6499,"ename":"ALLEN","job":"SALESMAN","sal":1600,"deptno":30},
    {"empno":6521,"ename":"WARD","job":"ANALYST","sal":1250,"deptno":30},
    {"empno":6566,"ename":"JONES","job":"MANAGER","sal":2975,"deptno":20},
    {"empno":7654,"ename":"MARTIN","job":"SALESMAN","sal":1250,"deptno":30},
    {"empno":7698,"ename":"BLAKE","job":"MANAGER","sal":2850,"deptno":30},
    {"empno":7782,"ename":"CLARK","job":"MANAGER","sal":2450,"deptno":10}
    ];

  public getEmpData():any[]
  {
  
    return this.dataArray;
  }
  public removeEmpData(empno:number)
  {
    let index = this.dataArray.findIndex(item => item.empno == empno);
      this.dataArray.splice(index, 1);
  }

  public addEmpData(empObj:any)
  {
   
    this.dataArray.push(empObj);
  }
   
}
