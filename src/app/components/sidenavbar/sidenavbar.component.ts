import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BetService } from 'src/app/service/bet.service';
import { User } from 'src/app/service/models/user';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {
  selectedUsers$:any;
  // users:User[];
  users:User;

 constructor( private  _betService:BetService,private router :Router) {
  }

  ngOnInit(): void {
    this._betService.cast.subscribe(user => this.selectedUsers$ = user);
  }
  
  start(){
    this.router.navigate(['/Bet'])
  }
}
