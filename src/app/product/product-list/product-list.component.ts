import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { product } from 'src/app/product';
import { AuthServiceService } from 'src/app/site/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() type: product[];
  isAdmin: boolean;
  list: product[];

  // searchKey: string;
  // itemList: product[];
  // filteredlist: product[];

  constructor(private productService: ProductServiceService, private router: Router, private authService: AuthServiceService) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin;
    this.productService.getAllProductsList().subscribe(
      data => {
        this.list = data;
        //this.itemList = data;

      });
    // this.router.navigate(['/search-bar'])
  }

  onClickDelete(code: string) {
    console.log("Delete clicked");
    this.productService.deleteProduct(code).subscribe(
      data => {

      });
  }

  // searchList(){
  //   this.type = this.itemList.filter(search => (search.productName.toLowerCase().indexOf(this.searchKey.toLocaleLowerCase()) != -1));
  //   //this.productService.getSubject().next(this.filteredlist);
  //  console.log(this.filteredlist);
  // }

}
