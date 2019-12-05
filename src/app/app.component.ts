import { Component } from '@angular/core';
import { AuthServiceService } from './site/auth-service.service';
import { Router } from '@angular/router';
import { ProductServiceService } from './product/product-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smartshop-angular';

  ngOnInit(): void {
    this.loggedIn();
    this.router.navigate(['search-bar']);
  }
  
  constructor(private authService:AuthServiceService,private router: Router,private productService:ProductServiceService ){

  }

  isLoggedIn:boolean = false;
  clickedOnAdd :boolean= false;
  addedToCart :boolean= false;
  

  loggedIn():boolean {
    if(!this.authService.loggedInUser.loggedOut){
      this.isLoggedIn = true;
      return true
    }
    else{
      this.isLoggedIn = false;
      
      return false;
    }
  }
  // clickOnAddCart(){
  //   this.clickedOnAdd = false;
  //   this.addedToCart = false;
  // }
  

}
