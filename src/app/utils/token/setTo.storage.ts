import { generateDummyToken } from "./generate";
import { token } from "./token.interface";

export function toStore(res:string){
    const token =  generateDummyToken();
    const obj:token = {
        token:token,
        dateCreated: Date.now(),
        tokenExpires: Date.now() +259200000,
        tokenUser: res
      };
      
      localStorage.setItem('jwt', JSON.stringify(obj));
}