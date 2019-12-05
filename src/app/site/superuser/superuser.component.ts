import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-superuser',
  templateUrl: './superuser.component.html',
  styleUrls: ['./superuser.component.css']
})
export class SuperuserComponent implements OnInit {

  adminList:User[]
  
  constructor( private router:Router,private authservice:AuthServiceService) { }

  ngOnInit() {
    this.authservice.adminData().subscribe(
      (data)=>{
        this.adminList=data;
        console.log(data);
        console.log(this.adminList);
      }
    );
  }

  accept(user:User){
    user.status="A";
    this.authservice.response(user).subscribe(
      data=>{user=data});
  }

  
  decline(user:User){
    user.status="D";
    this.authservice.response(user).subscribe(
      data=>{user=data});
  }

}
