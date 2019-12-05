import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { product } from 'src/app/product';
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrls: ['./stock-management.component.css']
})
export class StockManagementComponent implements OnInit {
  editForm: FormGroup;
  productItem: product;
  types = ["Electronics", "Grocery", "Furniture", "Clothing"];

  constructor(private formBuild: FormBuilder, private productService: ProductServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const productItemId = this.route.snapshot.paramMap.get('code');
    this.productService.getProduct(productItemId).subscribe(
      (data) => {
        this.productItem = data;
        this.form();
      })
    this.form();
  }
  form() {
    this.editForm = this.formBuild.group({
      editName: [this.productItem.productName, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]],
      editURL: [this.productItem.productImage, [
        Validators.required
      ]],
      editBrand: [this.productItem.brand, [
        Validators.required
      ]],
      editStock: [this.productItem.stockCount, [
        Validators.required
      ]],
      rate: [this.productItem.ratePerQuantity, [
        Validators.required
      ]],
      manufactureDate: [this.productItem.dateOfManufacture, [
        Validators.required
      ]],
      expiryDate: [this.productItem.dateOfExpiry, [
        Validators.required
      ]],
      addDate: [this.productItem.date, [
        Validators.required
      ]],
      type: [this.productItem.productType, [
        Validators.required
      ]],
      aisle: [this.productItem.aisle, [
        Validators.required
      ]],
      shelf: [this.productItem.shelf, [
        Validators.required
      ]],
    })
  }

  get editName() {
    return this.editForm.get('editName');
  }
  get editURL() {
    return this.editForm.get('editURL');
  }
  get editBrand() {
    return this.editForm.get('editBrand');
  }
  get editStock() {
    return this.editForm.get('editStock');
  }
  get rate() {
    return this.editForm.get('rate');
  }
  get type() {
    return this.editForm.get('type');
  }
  get manufactureDate() {
    return this.editForm.get('manufactureDate');
  }
  get expiryDate() {
    return this.editForm.get('expiryDate');
  }
  get addDate() {
    return this.editForm.get('addDate');
  }
  get aisle() {
    return this.editForm.get('aisle');
  }
  get shelf() {
    return this.editForm.get('shelf');
  }


  onSaveClick() {
    let menuItem: product =
    {

      productCode: this.productItem.productCode,
      productName: this.editForm.value["editName"],
      brand: this.editForm.value["editBrand"],
      stockCount: this.editForm.value["editStock"],
      ratePerQuantity: this.editForm.value["rate"],
      dateOfManufacture: new Date(this.editForm.value["manufactureDate"]),
      dateOfExpiry: new Date(this.editForm.value["expiryDate"]),
      date: new Date(this.editForm.value["addDate"]),
      productType: this.editForm.value["type"],
      productImage: this.editForm.value["editURL"],
      aisle: this.editForm.value["aisle"],
      shelf: this.editForm.value["shelf"],
      quantity: null,
    }
    console.log(menuItem);
    this.productService.modifyProduct(menuItem).subscribe(
      (data) => {
        menuItem = data;
      });
    this.router.navigate(['search-bar'])
  }

}


