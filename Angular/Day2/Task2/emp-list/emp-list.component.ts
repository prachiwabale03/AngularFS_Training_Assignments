import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {Emp} from '../../Models/Emp';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit, OnChanges {
  @Input()
  sortColumn:string="";

  filteredArray:Emp[]=[];

  empArray:Emp[]=[
   
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
 
  ngOnChanges() {
  
   if(this.sortColumn=="EmpId")
    this.filteredArray = this.empArray.sort((first,second)=>0-(first.EmpId>second.EmpId?-1:1));
    else if(this.sortColumn=="EmpName")
    {
      this.filteredArray = this.empArray.sort((first,second)=>0-(first.EmpName>second.EmpName?-1:1));
    }
    else if(this.sortColumn=="EmpJob")
    {
      this.filteredArray = this.empArray.sort((first,second)=>0-(first.EmpJob>second.EmpJob?-1:1));
    }
    else if(this.sortColumn=="EmpDeptNo")
    {
      this.filteredArray = this.empArray.sort((first,second)=>0-(first.EmpDeptNo>second.EmpDeptNo?-1:1));
    }
    else if(this.sortColumn=="EmpSalary")
    {
      this.filteredArray = this.empArray.sort((first,second)=>0-(first.EmpSalary>second.EmpSalary?-1:1));
    }
    else  
    this.filteredArray = this.empArray;
    
  }

}
