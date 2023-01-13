import { Component, Input, OnInit } from '@angular/core';
import { CommonModule,Location } from '@angular/common';
import {MatIconModule} from "@angular/material/icon"
import { RouterModule } from '@angular/router';
import { token } from 'src/app/utils/token/token.interface';
import { getLocation } from 'src/app/utils/validation/location.validation';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,MatIconModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isOpen:boolean = false;
  path!:string
  token!:string | null |undefined
  constructor(private location:Location){
    setTimeout(()=>{
      this.path = this.location.path();
      console.log(this.path);
      
      if (this.path == '/home' || this.path == '/home') {
        this.token = undefined;
      }
      this.token = localStorage.getItem("jwt")
    })
  }
  ngOnInit(): void {

  }
  open(){this.isOpen = true;}
  close(){this.isOpen = false;}
}