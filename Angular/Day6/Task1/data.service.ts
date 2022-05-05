import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpObj:HttpClient) { }

  baseUrl:string  = "http://localhost:3000/emp/";

    // Read Single
    public getEmpById(eid:number):any
    {
      return this.httpObj.get(this.baseUrl +eid);
    }

    public getEmployeeDetails():Observable<any>
    {
      return this.httpObj.get(this.baseUrl);
    }
  
    // Create
    public addEmployee(empObj:any):any
    {
      return this.httpObj.post(this.baseUrl, empObj);
    }
  
    // Update
    public updateEmployee(empObj:any):any
    {
      return this.httpObj.put(this.baseUrl + empObj.EmpId, empObj);
      // return this.httpObj.put(this.baseUrl, stObj);
    }
  
  
    // Delete
    public deleteStudent(eid:number):any
    {
      return this.httpObj.delete(this.baseUrl + eid);
    }
}
