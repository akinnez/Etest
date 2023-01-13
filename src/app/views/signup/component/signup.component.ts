import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SignupService } from '../service/signup.service';
import { signup } from '../type/signup.interface';
import { openSnackBar } from 'src/app/utils/notifications/alert/snackbar/snackbar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { generateDummyToken } from 'src/app/utils/token/generate';
import { toStore } from 'src/app/utils/token/setTo.storage';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  isUser!: signup | undefined;
  constructor(
    private fb: FormBuilder,
    public user: SignupService,
    private _snackBar: MatSnackBar,
    private route: Router
  ) {}
  form = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  navigate() {
    try {
      if (this.form.invalid) {
        return openSnackBar(
          { msg: 'Please check the field(s) properly', y: 'center', x: 'top' },
          this._snackBar
        );
      }
      this.user.getData().subscribe({
        next: (res) => {
          this.isUser = res.find(
            (e) =>
              e.username == this.form.value.username ||
              e.email == this.form.value.email
          );
          if (this.isUser) {
            return openSnackBar(
              { msg: 'User already exist', y: 'center', x: 'top' },
              this._snackBar
            );
          }
          this.user.postData(this.form.value).subscribe({
            next: (res) => {
              openSnackBar(
                { msg: 'Account Created Successful', y: 'start', x: 'bottom' },
                this._snackBar
              );
              toStore(res.username)
              setTimeout(location.pathname ="/user/" + res.username);
            },
            error: (err) => {
              openSnackBar(
                { msg: err.statusText, y: 'start', x: 'bottom' },
                this._snackBar
              );
            },
          });
        },
        error: (err) => {
          openSnackBar(
            { msg: err.statusText, y: 'start', x: 'bottom' },
            this._snackBar
          );
        },
      });
    } catch (error) {
      openSnackBar({ msg: error, y: 'start', x: 'bottom' }, this._snackBar);
    }
  }
}
