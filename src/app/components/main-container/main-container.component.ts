import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BetService } from 'src/app/service/bet.service';
import { User } from 'src/app/service/models/user';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  // users:User[]=[];
  users:User[];
   public filter:string = '';
   isAssendingName:boolean=true;
   isAssendingBet:boolean=true;
  constructor( private  _betService:BetService,private router :Router) {
    this.getAllUsers();
   }

  ngOnInit(): void {
    
  }

  getAllUsers(): void {
    this._betService.getAllUsers()
    .subscribe((data:User[]) =>{
       this.users = data;
       this.transform();
    });
  }

  transform() {
    this.users.forEach(element => {
      element.ProfileImage=element["Profile Image"];
    });
  }
  onkeyUp(name){
    this.filter= name;
  }
  select( user:User){
    console.log(user);
    
    this._betService.selectUser(user);
  }
  toggleSortName(){
    console.log( this.users);
    this.isAssendingName = !this.isAssendingName;
    this.users = this.users.sort((a, b) => a.Name !== b.Name ? a.Name < b.Name ? -1 : 1 : 0);

  }
  toggleSortBet(){
    this.isAssendingBet = !this.isAssendingBet;
  }

}
