import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  constructor() { }

  friendsNames:string[]=["Prachi","Supriya","Vaishnavi"];
  ngOnInit(): void {
  }

}
