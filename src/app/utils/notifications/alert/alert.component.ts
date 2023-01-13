import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  template:`<div class="text-white">{{data}}</div>`,
  styleUrls: []
})
export class AlertComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data:string){}
}
