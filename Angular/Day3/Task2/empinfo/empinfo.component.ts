import { Component, OnInit } from '@angular/core';
import {Emp} from '../../Models/Emp';

@Component({
  selector: 'app-empinfo',
  templateUrl: './empinfo.component.html',
  styleUrls: ['./empinfo.component.css']
})
export class EmpinfoComponent implements OnInit {

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
