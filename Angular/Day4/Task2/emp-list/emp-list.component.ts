import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent  {

  

  empArray:Emp[]=[
   
    {EmpId:2,EmpName:"Supriya",EmpJob:"Solution Engineer",EmpSalary:40000,EmpDeptNo:20},
    {EmpId:3,EmpName:"Vaishnavi",EmpJob:"Senior Engineer",EmpSalary:40000,EmpDeptNo:30},
    {EmpId:4,EmpName:"Sanket",EmpJob:"Junior Engineer",EmpSalary:40000,EmpDeptNo:40},
    {EmpId:5,EmpName:"Omkar",EmpJob:"Trainee Engineer",EmpSalary:40000,EmpDeptNo:50},
    
    {EmpId:1,EmpName:"Prachi",EmpJob:"Engineer",EmpSalary:40000,EmpDeptNo:10},
    {EmpId:6,EmpName:"Komal",EmpJob:"Engineer",EmpSalary:40000,EmpDeptNo:60},
    
  ]
}


 class Emp
{
    public EmpId  			:number=  0;
    public EmpName		: string = "";	 
    public EmpJob			: string= "";
    public EmpSalary		: number= 0;
    public EmpDeptNo 		:	number =0;
    constructor(empId:number,empName:string,empJob:string,empSalary:number,empDeptNo:number)
    {
        this.EmpDeptNo=empDeptNo;
        this.EmpId=empId;
        this.EmpJob=empJob;
        this.EmpName=empName;
        this.EmpSalary=empSalary;
    }
  
}


