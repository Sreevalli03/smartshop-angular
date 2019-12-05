import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { purchaseHistory } from '../../purchaseHistory';
import { UserServiceService } from 'src/app/site/user-service.service';
import { product } from 'src/app/product';
import { AuthServiceService } from 'src/app/site/auth-service.service';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {

  purchaseList: purchaseHistory;
  dateKey: Date=null;
  dateList:purchaseHistory;
  constructor(private productService: ProductServiceService, private authService: AuthServiceService) { }

  ngOnInit() {
    this.productService.getBill(this.authService.userName).subscribe(
      data => {
        console.log(this.authService.userName);
        this.purchaseList = data;
        console.log(this.purchaseList);
      });

  }

  searchDate(){
    if(this.dateKey.toLocaleString().length==0){
       this.dateList=this.purchaseList;
     }
     else{
      this.dateList=this.purchaseList.filter(n =>(this.dateKey.toLocaleString().match(n.billDate.toLocaleString())));
       console.log(this.purchaseList);
     }
   }
  
  
}
