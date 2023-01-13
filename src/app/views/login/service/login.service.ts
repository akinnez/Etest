import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from '../type/login.interface';
import {url} from '../../../utils/environment/environment'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http:HttpClient) { }
  getData():Observable<login[]>{
    return this.http.get<login[]>(url + 'users')
  }
}
