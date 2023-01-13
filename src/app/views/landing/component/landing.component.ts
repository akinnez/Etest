import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingService } from '../service/landing.service';
import { ProdCardComponent } from 'src/app/components/prod-card/prod-card.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IProducts } from '../../products/type/product.interface';
import { MatMenuModule } from '@angular/material/menu';
import { details } from '../types/landing.interface';
import { token } from 'src/app/utils/token/token.interface';
import { loginValidation } from 'src/app/utils/validation/login.validation';
import { openSnackBar } from 'src/app/utils/notifications/alert/snackbar/snackbar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [CommonModule, ProdCardComponent, RouterModule, MatMenuModule,MatSnackBarModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  shikinideals!: IProducts[];
  hotdeals!: IProducts[];
  toprank!: IProducts[];
  details!: details[];
  topusr: any;
  token!:token | undefined;
  params!:string | undefined | null 

  constructor(
    public serv: LandingService,
    private route:Router,
    private _snackBar:MatSnackBar,
    private activatedRoute:ActivatedRoute,
  ) {
    
    this.topusr = localStorage.getItem('jwt')
    this.token = JSON.parse(this.topusr)  
  }
  ngOnInit(): void {
    this.params = this.activatedRoute.snapshot.params['id'];
    if (this.params !==this.token?.tokenUser) {
      this.params = this.token?.tokenUser
    }
    loginValidation(this.route,this.token)
  
    this.serv.getAllprod().subscribe(
      {
        next:(res)=>{
          this.shikinideals = res.filter((e: any) => {
            return e.price * 670 < 10000;
          });
          this.hotdeals = res.filter((e: any) => {
            return e.price * 670 > 10000 && e.price * 670 < 25000;
          });
          this.toprank = res.filter((e: any) => {
            return e.price * 670 > 25000;
          });
    
          this.details = [
            {
              deals: 'Shikini Deals',
              fxn: this.shikinideals,
              hype: 'Free shipping included',
            },
            {
              deals: 'Hot Deals',
              fxn: this.hotdeals,
              hype: 'Amazing Deals for your everyday use',
            },
            {
              deals: 'Top Ranking',
              fxn: this.toprank,
              hype: 'See what everybody is shopping',
            },
          ];
        },
        error:(err)=>{
          console.log(err);
          
         return openSnackBar(
          { msg: err.statusText, y: 'start', x: 'bottom' },
          this._snackBar
        );
        }
      })
    }
}
