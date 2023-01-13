import { Router } from "@angular/router";
import { token } from "../token/token.interface";

export function loginValidation(route:Router,token:token | undefined) {
    if (!token) {
    return route.navigate(['/home'])
    } 
    if(token.tokenExpires < Date.now()){
      localStorage.removeItem('jwt');
      return route.navigate(['/login'])
    }
    else{
    return route.navigate(['/user',token.tokenUser])
    }
}