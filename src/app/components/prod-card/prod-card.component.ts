import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'
import { IProducts } from 'src/app/views/products/type/product.interface';
import { RouterModule } from '@angular/router';
import { validateDistance } from 'src/app/utils/validation/location.validation';
import { openSnackBar } from 'src/app/utils/notifications/alert/snackbar/snackbar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-prod-card',
  standalone: true,
  imports: [CommonModule,MatCardModule,RouterModule,MatSnackBarModule],
  templateUrl: './prod-card.component.html',
  styleUrls: ['./prod-card.component.scss']
})
export class ProdCardComponent {
  @Input() prod !: IProducts
  token!:boolean

    constructor(private _snackBar:MatSnackBar){
      this.token = !!localStorage.getItem('jwt')
    }

    checkval(){
      let dist = sessionStorage.getItem('distance')
         if(validateDistance(dist)){
           return openSnackBar(
             { msg: "Your Order has been placed since you are " + dist + " km away" , y: 'start', x: 'bottom' },
             this._snackBar
           );
         }
         return openSnackBar(
           { msg: "Your Order was not placed because you are " + dist + " km away" , y: 'start', x: 'bottom' },
           this._snackBar
         );
     }
}
