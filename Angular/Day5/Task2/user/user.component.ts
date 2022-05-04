import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   data1:any;
  constructor(private _httpClient:HttpClient) { 

  }

  ngOnInit(): void {
  
  }

  getData():any{

    this._httpClient.get("https://reqres.in/api/users").subscribe((resData:any)=>{
     
    this.data1=resData.data;

    }
    
    );

  }
}
