import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  authenticationApiUrl = environment.baseUrl;
  username: string;
//  userId:string;
//  userRole:string;

  constructor(private httpClient:HttpClient, private router:Router, private route:ActivatedRoute) { }
  userList = [
    {username:'admin',firstname:"admin",lastname:"admin",password:"admin123"},
    {username:'1',firstname:"sreevalli",lastname:"Mogulluri",password:"pwd"}
  ];
 
 
}
