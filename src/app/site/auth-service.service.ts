import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router'
import { User } from '../User';
import { ProductServiceService } from '../product/product-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  authenticationApiUrl = environment.baseUrl;
  loggedInUser={loggedOut:true};
  validCredentials:boolean = true;
  loggedIn:boolean = false;
  userRole:string;
  userName:string;
  private token: string;
  type:string;
  isAdmin: boolean;
  isUser:boolean;

  constructor(private httpClient:HttpClient, private router:Router){

  }

  authenticate(username: string, password: string): Observable<any>{
    let credentials=btoa(username + ':' + password);
     let headers = new HttpHeaders();
     headers = headers.set('Authorization', 'Basic ' + credentials);
     return this.httpClient.get(this.authenticationApiUrl+'authenticate', {headers});
   }

   public setToken(token: string) {
    this.token = token;
  }
  public getToken() {
    return this.token;
  }

  authenticateUser(user) {
        console.log("auth")
        this.authenticate(user.userId,user.password).subscribe(
          (data)=>{
         this.loggedInUser = user;
         this.validCredentials = true;
         this.userRole =data.role;
         this.userName =data.username;
         console.log(data.userId)
         this.loggedIn = true;
         this.setToken(data.token);
         if(this.userRole == 'superuser'){
           this.router.navigate(['superuser'])
         }
       if(this.userRole == 'admin'){
          this.isAdmin = true;
          this.router.navigate(['search-bar']);
         }

         if(this.userRole == 'user'){
          this.isAdmin = false;
          this.isUser=true;
          this.router.navigate(['search-bar']);
         }
 
         console.log("login success")
          },
       (error)=>{
         this.validCredentials = false;
       })
     }

     logout() {
      this.loggedInUser = {loggedOut:true};
      this.loggedIn = false;
      this.isUser=false;
      this.isAdmin=false;
      this.setToken(null);
      this.router.navigate(['login']);
    }
     addUser(user:User) {
     // const userType = this.route.snapshot.paramMap.get('type');
      if(this.type=="user"){;
         return this.httpClient.post<User>(this.authenticationApiUrl+'users/U',user); 
      }
      else{
        return this.httpClient.post<User>(this.authenticationApiUrl+'users/A',user); 
      }
   
  }

  adminData():Observable<User[]>
  {
    let headers = new HttpHeaders();
    headers=headers.set('Authorization','Bearer '+this.getToken());
    return this.httpClient.get<User[]>(this.authenticationApiUrl+'users/adminrequest',{headers});

  }

  response(user:User):Observable<User>
  {
    let headers = new HttpHeaders();
    headers=headers.set('Authorization','Bearer '+this.getToken());
    return this.httpClient.put<User>(this.authenticationApiUrl+'users',user,{headers});

  }

}
