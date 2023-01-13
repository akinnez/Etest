import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule,MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { login } from '../type/login.interface';
import { AlertComponent } from 'src/app/utils/notifications/alert/alert.component';
import { generateDummyToken } from 'src/app/utils/token/generate';
import { openSnackBar } from 'src/app/utils/notifications/alert/snackbar/snackbar';
import { toStore } from 'src/app/utils/token/setTo.storage';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,MatIconModule,RouterModule,FormsModule,ReactiveFormsModule,MatSnackBarModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private fb:FormBuilder, private users:LoginService, public route:Router,private _snackBar: MatSnackBar) { }
  form = this.fb.group({
    user:['',[Validators.required]],
    password:['',[Validators.required]]
  })
  user!:login | undefined;

  navigate(){
    if(this.form.invalid){
      return openSnackBar({msg:'Please fill all the fields',y:"center",x:"top"},this._snackBar)
    }
     this.users.getData().subscribe(
      (res) =>{
      this.user = res.find((e:any) =>{
        return e.username == (this.form.value).user || e.email == (this.form.value).user
      })
        if(!this.user) return openSnackBar(
          {msg:'Incorrect username or password',y:"start",x:"bottom"}, this._snackBar
          );
        if(this.user.password !== (this.form.value).password) return openSnackBar(
          {msg:'Incorrect username or password',y:"start",x:"bottom"}, this._snackBar
          );

          toStore(this.user.username)
          openSnackBar({msg:'Login Successful',y:"start",x:"bottom"}, this._snackBar);
          location.pathname ="/user/" + this.user.username 
      }
     )
    }
}
