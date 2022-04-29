import { Component, OnInit } from '@angular/core';
import {Emp1} from '../../Models/Emp1';

@Component({
  selector: 'app-emprange',
  templateUrl: './emprange.component.html',
  styleUrls: ['./emprange.component.css']
})
export class EmprangeComponent implements OnInit {

  filterMin:number=0;
  filterMax:number=0;

  min:number=0;
  max:number=0;

  empArray:Emp1[]=[
   
    {EmpId:2,EmpName:"Supriya",EmpJob:"Solution Engineer",EmpSalary:100000,EmpDeptNo:20},
    {EmpId:3,EmpName:"Vaishnavi",EmpJob:"Senior Engineer",EmpSalary:40000,EmpDeptNo:30},
    {EmpId:4,EmpName:"Sanket",EmpJob:"Junior Engineer",EmpSalary:40000,EmpDeptNo:40},
    {EmpId:5,EmpName:"Omkar",EmpJob:"Trainee Engineer",EmpSalary:50000,EmpDeptNo:50},
    
    {EmpId:1,EmpName:"Prachi",EmpJob:"Engineer",EmpSalary:60000,EmpDeptNo:10},
    {EmpId:6,EmpName:"Komal",EmpJob:"Engineer",EmpSalary:49000,EmpDeptNo:60},
    
  ]

  constructor() { }

  ngOnInit(): void {
  }
  getfilteredData_click(){
    this.min=this.filterMin;
    this.max=this.filterMax;

  }

}
