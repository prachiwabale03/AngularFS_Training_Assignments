import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ownerForm:FormGroup = new FormGroup({
    oname : new FormControl("", Validators.required),
    contact : new FormControl("", [Validators.required,Validators.pattern("\\d{10}")]),
   
    email : new FormControl("", [Validators.email,Validators.required]),
    rnumber : new FormControl("", Validators.pattern("[A-Z]+[A-Z]+[0-9]+[A-Z]+[A-Z]+[0-9]+$")),
    address : new FormControl("", Validators.required),
    model:new FormControl("",[Validators.pattern("^[a-zA-Z0-9 ]{10}")]),
    color: new FormControl("",Validators.required),
    year:new FormControl("", [Validators.max(2022), Validators.min(2012)])

  });


 public submit_click():void
 {

     alert("Owner's Details are registered.");

 }

}
