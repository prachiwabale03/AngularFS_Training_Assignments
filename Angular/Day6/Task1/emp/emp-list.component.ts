import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    
  }

  public EmpId  			:number=  0;
  public EmpName		: string = "";	 
  public EmpJob			: string= "";
  public EmpSalary		: number= 0;
  public EmpDeptNo 		:	number =0;

  empArray:any[]=[];

  getEmp_click()
  {
			this.dataService.getEmployeeDetails().subscribe( (resData:any) =>
			{
        this.empArray = resData;
			});
  }

  addEmp_click() {
    let empObj:any = {};
    empObj.EmpId = this.EmpId;
    empObj.EmpName = this.EmpName;
    empObj.EmpJob = this.EmpJob;
    empObj.EmpSalary = this.EmpSalary;
    empObj.EmpDeptNo = this.EmpDeptNo;



    this.dataService.addEmployee(empObj).subscribe( (resData:any) =>
    {
      alert("New Employee details are added to database");
    
      this.getEmp_click();
    });
    this.clearFields();
   
  }

  updateEmp_click() {
    let empObj:any = {};
    empObj.EmpId = this.EmpId;
    empObj.EmpName = this.EmpName;
    empObj.EmpJob = this.EmpJob;
    empObj.EmpSalary = this.EmpSalary;
    empObj.EmpDeptNo = this.EmpDeptNo;


    this.dataService.updateEmployee(empObj).subscribe( (resData:any) =>
    {
    alert("Employee details are update to database");
   
    this.getEmp_click();
    });
    this.clearFields();
   
  }

  delete_click(eid:number) {

    this.dataService.deleteStudent(eid).subscribe( (resData:any) =>
    {
    
      this.getEmp_click();
    });
    

  }

  select_click(eid:number) {

    this.EmpId = eid;

    this.dataService.getEmpById(eid).subscribe( (resData:any) =>
    {
    
      this.EmpName=resData.EmpName;
      this.EmpSalary=resData.EmpJob;
      this.EmpJob=resData.EmpSalary;
      this.EmpDeptNo=resData.EmpDeptNo;
    });

  
  }
  clearFields() {
    this.EmpId=0;
    this.EmpName = "";
    this.EmpJob= "";
    this.EmpSalary = 0;
    this.EmpDeptNo=0;
  }


}
