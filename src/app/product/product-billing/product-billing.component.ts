import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/product';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-billing',
  templateUrl: './product-billing.component.html',
  styleUrls: ['./product-billing.component.css']
})
export class ProductBillingComponent implements OnInit {


  itemList: product[];
  filteredlist: product[];
  searchKey: string;
  userList: product[];
  total: number = 0;
  contactNumber: any;

  constructor(private productService: ProductServiceService, private router: Router) { }

  ngOnInit() {
    this.userList = []
    this.productService.getAllProductsList().subscribe(
      data => {
        this.itemList = data;
        this.filteredlist = data;
        console.log(this.filteredlist)
      });
  }
  newSearch() {

    this.filteredlist = this.itemList.filter(bill => (bill.productName.toLowerCase().indexOf(this.searchKey.toLocaleLowerCase()) != -1) || (bill.productCode.indexOf(this.searchKey.toLocaleLowerCase()) != -1));
  }
  list(product: product) {
    let added: boolean = false;
    console.log(product)
    product.quantity = 1;
    this.userList.forEach(element => {
      if (element.productCode.match(product.productCode)) {
        added = true;
      }
    });
    if (!added) {
      this.userList.push(product);
      this.total = this.total + (+product.ratePerQuantity);
    }

  }
  removeInBilling(product: product) {
    if (product.quantity <= 1) {
      let index = this.userList.indexOf(product);
      this.userList.splice(index, 1);
    }
    if (product.quantity > 0) {
      product.quantity--;
      this.total = this.total - (+product.ratePerQuantity);
    }

  }

  addInBilling(product: product) {
    product.quantity++;
    this.total = this.total + (+product.ratePerQuantity);
  }

  onSaveClick() {
    alert('Billing is successful')
    console.log(this.userList)
    console.log(this.contactNumber)
    this.userList.forEach(purchase => {
      this.productService.updateBill(this.contactNumber, purchase.productCode, purchase.quantity).subscribe(
        data => {
          console.log(data)
        })
    })
    this.router.navigate(['product-list']);
  }
}

