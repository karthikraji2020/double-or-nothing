import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/service/models/user';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css']
})
export class BetComponent implements OnInit {

  selectedUsers:User[];
  winner:number;
  constructor() { 
    this.winner = Math.floor(Math.random()*8)+1;
    this.selectedUsers=[
      {
        Name: "Diana",
        Price: "2",
        Bet: "3",
        ProfileImage: "https://s3-ap-southeast-1.amazonaws.com/he-public-data/dianada3c48e.jpeg"
      },
      {
        Name: "Disha Patahai",
        Price: "9999",
        Bet: "1",
        ProfileImage: "https://s3-ap-southeast-1.amazonaws.com/he-public-data/disha642f320.jpg"
      },
      {
        Name: "Eve",
        Price: "231",
        Bet: "8",
        ProfileImage: "https://s3-ap-southeast-1.amazonaws.com/he-public-data/eve05f5590.jpeg"
      },
      {
        Name: "Faizan",
        Price: "1",
        Bet: "2",
        ProfileImage: "https://s3-ap-southeast-1.amazonaws.com/he-public-data/faizan7534fdb.jpg"
      },
      {
        Name: "George",
        Price: "2000",
        Bet: "4",
        ProfileImage: "https://s3-ap-southeast-1.amazonaws.com/he-public-data/george826c2d1.jpg"
      },
      {
        Name: "Georgina",
        Price: "25",
        Bet: "1",
        ProfileImage: "https://s3-ap-southeast-1.amazonaws.com/he-public-data/georgina88813c3.jpeg"
      },
      {
        Name: "Gregory",
        Price: "500",
        Bet: "6",
        ProfileImage: "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gregory032c4c3.jpg"
      },
      {
        Name: "Harshal Mehta",
        Price: "3000",
        Bet: "9",
        ProfileImage: "https://s3-ap-southeast-1.amazonaws.com/he-public-data/harshal8fc14b7.jpg"
      },
     
      {
        Name: "Richie Rick",
        Price: "20",
        Bet: "7",
        ProfileImage: "https://s3-ap-southeast-1.amazonaws.com/he-public-data/richie9c21cda.jpg"
      },
      {
        Name: "Tiffany",
        Price: "85",
        Bet: "3",
        ProfileImage: "https://s3-ap-southeast-1.amazonaws.com/he-public-data/tiffanyd333edd.jpeg"
      }
    ]
  }

  ngOnInit(): void {
    this.transform();
  }
  transform() {
    this.selectedUsers.forEach((element,index) => {

      if(this.winner===index){
        element.description='Win';
      }else{  
        element.description='lost';
      }
    });
  }

}
