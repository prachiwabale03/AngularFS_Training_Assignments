import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FilterdataService {

  constructor(private httpObj:HttpClient) { }

  baseUrl:string  = "http://localhost:3000/emp/";

  public getEmpByJob(job:string):Observable<any[]>
  {
     return this.httpObj.get<any[]>(this.baseUrl).pipe(map(res=>{return res.filter(item=>item.EmpJob==job)}));
  }

  public getEmpNameByDept(dept:number):Observable<string[]>
  {

    return this.httpObj.get<any[]>(this.baseUrl).pipe(

      map(res => {

     

        return res.filter(item =>item.EmpDeptNo == dept).map((item) => item.EmpName)

    })

    );
      
  
  }

  public getEmpName_Job():Observable<any[]>{
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return res.map(item => {
          return { 	EmpName: item.EmpName, EmpJob : item.EmpJob} });
           })
    );

  }

  public getEmpNotInDept(dept:number):Observable<any[]>
  {

    return this.httpObj.get<any[]>(this.baseUrl).pipe(map(res=>{return res.filter(res=>res.EmpDeptNo!=dept)}));

  }

  getSortedEmpBySalary():Observable<any[]>
  {
   return this.httpObj.get<any[]>(this.baseUrl).pipe(map(res=>{return res.sort((first,second)=>0-(first.EmpSalary>second.EmpSalary?-1:1)) }));
  }
}
