import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent  {

 public EmpId  			:number=  54654564;
 public EmpName		: string = "Stephen";	 
 public EmpJob			: string= "Manger";
 public EmpSalary		: number= 75000;
 public EmpDept 		:	string ="Development";
}
