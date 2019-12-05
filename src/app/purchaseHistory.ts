import { product } from './product';

export interface purchaseHistory{
  filter: any;
 
    purchaseId:number;
    quantity:number;
    product:product;
    purchaseDate:Date;
}