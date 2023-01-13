import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {url} from '../../../utils/environment/environment'
import { IProducts } from '../../products/type/product.interface';



@Injectable({
  providedIn: 'root'
})
export class LandingService {
params:any
  constructor(public http:HttpClient) { }
  
  getAllprod():Observable<IProducts[]>{
    const product = this.http.get<IProducts[]>(url + 'products')
    return product
  }
 
}
