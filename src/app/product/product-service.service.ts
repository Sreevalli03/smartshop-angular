import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthServiceService } from '../site/auth-service.service';
import { product } from '../product';
import { purchaseHistory } from '../purchaseHistory';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  isAdmin: boolean;
  private token: string;
  isCheck:boolean;

  public setIsCheck(isCheck: boolean) {
    this.isCheck = isCheck;
  }

  public getIsCheck():boolean {
    return this.isCheck;
  }
 // private subject = new Subject<product[]>();

  constructor(private httpClient: HttpClient, private authService: AuthServiceService) { } 

  getProductList(type: string): Observable<product[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.getToken());
    return this.httpClient.get<product[]>('http://localhost:8030/smartshop-service/product-types/' + type, { headers });
  }

  public setToken(token: string) {
    this.token = token;
  }

  public getToken() {
    return this.token;
  }

  // getSubject(): Subject<product[]> {
  //   return this.subject
  // }



  getAllProductTypes(): Observable<string[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.getToken());
    if (headers != null) {
      return this.httpClient.get<string[]>('http://localhost:8030/smartshop-service/product-types', { headers });
    }

    else {
      return this.httpClient.get<string[]>('http://localhost:8030/smartshop-service/product-types');
    }
  }

  getAllProductsList(): Observable<product[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.getToken());
    if (headers != null) {
      return this.httpClient.get<product[]>('http://localhost:8030/smartshop-service/product-types/productsList', { headers });
    }

    else {
      return this.httpClient.get<product[]>('http://localhost:8030/smartshop-service/product-types/productsList');
    }
  }

  getProduct(code: string): Observable<product> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.getToken());
    if (headers != null) {
      return this.httpClient.get<product>('http://localhost:8030/smartshop-service/product-types/edit/' + code, { headers });
    }
  }


  modifyProduct(menu: product): Observable<product> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.getToken());
    if (headers != null) {
      return this.httpClient.put<product>('http://localhost:8030/smartshop-service/product-types', menu, { headers });
    }
  }

  addProduct(product: product): Observable<product> {
    console.log(product);
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.getToken());
    if (headers != null) {
      return this.httpClient.post<product>('http://localhost:8030/smartshop-service/product-types/addproducts', product, { headers });
    }
  }

  deleteProduct(code: string): Observable<product> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.getToken());
    if (headers != null) {
      return this.httpClient.delete<product>('http://localhost:8030/smartshop-service/product-types/delete/' + code, { headers });
    }
  }

  updateBill(contactNumber: string, code: string, quant: number): Observable<product> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.getToken());
    if (headers != null) {
      return this.httpClient.post<product>('http://localhost:8030/smartshop-service/product-types/bill/' + contactNumber + '/' + code + '/' + quant, { headers });
    }
  }


  getBill(name: string): Observable<purchaseHistory> {
    let headers = new HttpHeaders();
    console.log(name);
    headers = headers.set('Authorization', 'Bearer ' + this.getToken());
    if (headers != null) {
      return this.httpClient.get<purchaseHistory>('http://localhost:8030/smartshop-service/product-types/bill/' + name, { headers });
    }
  }
}
