import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { product } from 'src/app/product';
import { AuthServiceService } from 'src/app/site/auth-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  searchKey: string;
  productList: string[];
  filteredProductList: string[];
  isAdmin: boolean = false;

   itemList: product[];
   filteredlist: product[];

  constructor(private productService: ProductServiceService,private authService:AuthServiceService) { }

  ngOnInit() {
    this.productService.setIsCheck(false);
    this.productService.getAllProductTypes().subscribe(
      data => {
        this.productList = data;
        this.filteredProductList = data
      });

    this.productService.getAllProductsList().subscribe(
      data => {
        this.itemList = data;
        this.filteredlist = data;
        console.log(this.filteredlist)
      });
  }

  onClickDelete(code: string) {
    console.log("Delete clicked");
    this.productService.deleteProduct(code).subscribe(
      data => {

      });
  }

  search() {
   //this.filteredProductList = this.productList.filter(prod => prod.toLocaleLowerCase().includes(this.searchKey.toLocaleLowerCase()));

     this.filteredlist = this.itemList.filter(search => (search.productName.toLowerCase().indexOf(this.searchKey.toLocaleLowerCase()) != -1));
    //  this.productService.getSubject().next(this.filteredlist);
     console.log(this.filteredlist);
  }
}
