import { Component, OnInit } from '@angular/core';
import {User} from '../../Models/User';

@Component({
  selector: 'app-slicepipe',
  templateUrl: './slicepipe.component.html',
  styleUrls: ['./slicepipe.component.css']
})
export class SlicepipeComponent implements OnInit {
  start:number = 0;
  end:number = 4;
  count:number=0;
  flag:boolean=false;
  len:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  userObj1:User=new User("Prachi",1234567656,new Date("2019-05-27"),"Female");
  userObj2:User=new User("Prachi",1234567656,new Date("2019-05-27"),"Male");
  userObj3:User=new User("Prachi",1234567656,new Date("2019-05-27"),"F");
  userObj4:User=new User("Prachi",1234567656,new Date("2019-05-27"),"Male");
  userObj5:User=new User("Prachi",1234567656,new Date("2019-05-27"),"M");
  userObj6:User=new User("Prachi",1234567656,new Date("2019-05-27"),"F");
  userObj7:User=new User("Prachi",1234567656,new Date("2019-05-27"),"F");
  userObj8:User=new User("Prachi",1234567656,new Date("2019-05-27"),"M");
  userObj9:User=new User("Prachi",1234567656,new Date("2019-05-27"),"F");
  userObj10:User=new User("Prachi",1234567656,new Date("2019-05-27"),"F");
  userObj11:User=new User("Prachi",1234567656,new Date("2019-05-27"),"Female");
  userObj12:User=new User("Prachi",1234567656,new Date("2019-05-27"),"Male");
  userObj13:User=new User("Prachi",1234567656,new Date("2019-05-27"),"M");
  userObj14:User=new User("Prachi",1234567656,new Date("2019-05-27"),"M");
  userObj15:User=new User("Prachi",1234567656,new Date("2019-05-27"),"M");
  userObj16:User=new User("Prachi",1234567656,new Date("2019-05-27"),"M");
  userObj17:User=new User("Prachi",1234567656,new Date("2019-05-27"),"M");
  userObj18:User=new User("Prachi",1234567656,new Date("2019-05-27"),"Female");
  userObj19:User=new User("Prachi",1234567656,new Date("2019-05-27"),"Female");
  userObj20:User=new User("Prachi",1234567656,new Date("2019-05-27"),"F");
  userObj21:User=new User("Prachi",1234567656,new Date("2019-05-27"),"M");

  userArray:User[]=[this.userObj1,this.userObj2,this.userObj3,this.userObj4,this.userObj5,this.userObj6,this.userObj7,
    this.userObj8,this.userObj9,this.userObj10,this.userObj11,this.userObj12,this.userObj13,this.userObj14,
    this.userObj15,this.userObj16,this.userObj17,this.userObj18,this.userObj19,this.userObj20,this.userObj21];


    loadMore_click()
    {
          
      this.len=this.userArray.length;
      if(this.end+1<this.userArray.length)
      {
       
        
        this.end = this.end + 4;
        this.count=this.count+1;
      }
    else
      {
        this.start = 0;
        this.end = 4;
        this.flag=true;
      }
    }
}
