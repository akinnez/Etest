import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from 'src/app/utils/environment/environment';
import { signup } from '../type/signup.interface';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }
  postData(data:any):Observable<signup>{
    return this.http.post<signup>(url + 'users', data)
  }
  getData():Observable<signup[]>{
    return this.http.get<signup[]>(url + 'users')
  }
}
