import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  uid:string = "admin@gmail.com";
  pwd:string = "admin123";
  result:boolean=false;


  public login_click():void
  {
     if(this.uid=="admin@gmail.com" && this.pwd=="admin123")
     {
   this.result=true;
   alert("Login Successful");
   this.router.navigate(['/Dashboard']);
     }
     else{
      alert("Login not Successful");
     }
  }

}
