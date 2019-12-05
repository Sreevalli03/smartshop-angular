import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { product } from 'src/app/product';
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  addForm: FormGroup;
  productItem: product;
  types = ["Electronics", "Grocery", "Furniture", "Clothing"];

  constructor(private formBuild: FormBuilder, private productService: ProductServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.form();
  }
  form() {
    this.addForm = this.formBuild.group({
      addCode: ['', [
        Validators.required,
      ]],
      addName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]],
      addURL: ['', [
        Validators.required
      ]],
      addBrand: ['', [
        Validators.required
      ]],
      addStock: ['', [
        Validators.required
      ]],
      rate: ['', [
        Validators.required
      ]],
      manufactureDate: ['', [
        Validators.required
      ]],
      expiryDate: ['', [
        Validators.required
      ]],
      addDate: ['', [
        Validators.required
      ]],
      type: ['', [
        Validators.required
      ]],
      aisle: ['', [
        Validators.required
      ]],
      shelf: ['', [
        Validators.required
      ]],
    })
  }

  get addCode() {
    return this.addForm.get('addCode');
  }
  get addName() {
    return this.addForm.get('addName');
  }
  get addURL() {
    return this.addForm.get('addURL');
  }
  get addBrand() {
    return this.addForm.get('addBrand');
  }
  get addStock() {
    return this.addForm.get('addStock');
  }
  get rate() {
    return this.addForm.get('rate');
  }
  get type() {
    return this.addForm.get('type');
  }
  get manufactureDate() {
    return this.addForm.get('manufactureDate');
  }
  get expiryDate() {
    return this.addForm.get('expiryDate');
  }
  get addDate() {
    return this.addForm.get('addDate');
  }
  get aisle() {
    return this.addForm.get('aisle');
  }
  get shelf() {
    return this.addForm.get('shelf');
  }


  onSaveClick() {
    alert('Product is added successfully');
    let menuItem: product =
    {
      productCode: this.addForm.value["addCode"],
      productName: this.addForm.value["addName"],
      brand: this.addForm.value["addBrand"],
      stockCount: this.addForm.value["addStock"],
      ratePerQuantity: this.addForm.value["rate"],
      dateOfManufacture: new Date(this.addForm.value["manufactureDate"]),
      dateOfExpiry: new Date(this.addForm.value["expiryDate"]),
      date: new Date(this.addForm.value["addDate"]),
      productType: this.addForm.value["type"],
      productImage: this.addForm.value["addURL"],
      aisle: this.addForm.value["aisle"],
      shelf: this.addForm.value["shelf"],
      quantity: null
    }
    this.productService.addProduct(menuItem).subscribe(
      (data) => {
        menuItem = data;
      });
    this.router.navigate(['search-bar'])
  }

}
