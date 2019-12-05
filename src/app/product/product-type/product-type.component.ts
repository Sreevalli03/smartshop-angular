import { Component, OnInit, Input } from '@angular/core';
import { product } from 'src/app/product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent implements OnInit {

  @Input() product: string[];
  productList: product[];

  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
  }

  products(type: string) {
    console.log(type);
    this.productService.setIsCheck(true);
    this.productService.getProductList(type).subscribe(
      data => this.productList = data)
    console.log(this.productList);
  }

}
