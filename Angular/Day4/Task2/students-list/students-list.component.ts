import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  empArray:Emp[]=[
   
    {EmpId:2,EmpName:"Supriya",EmpGrades:1},
    {EmpId:3,EmpName:"Vaishnavi",EmpGrades:1},
    {EmpId:4,EmpName:"Sanket",EmpGrades:4},
    {EmpId:5,EmpName:"Omkar",EmpGrades:2},
    
    {EmpId:1,EmpName:"Prachi",EmpGrades:4},
    {EmpId:6,EmpName:"Komal",EmpGrades:5},
    
  ]

}
class Emp{
  EmpId:number=0;
  EmpName:string="";
  EmpGrades:number=0;
}
