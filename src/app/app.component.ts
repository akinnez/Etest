import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {distBtwTwoPlaces} from "./utils/src/index";
import { getLocation, position } from './utils/validation/location.validation';
@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CommonModule,RouterModule,NavbarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Etest';
  pos:any
  location:any
  locationpos!:position;
  long:number;
  lat:number;
  constructor(){
    getLocation()
    this.lat = 3.4095;
    this.long = 6.4253;
  }
  ngOnInit(): void {
    setTimeout(()=>{
      this.pos = sessionStorage.getItem('location')
      this.locationpos = JSON.parse(this.pos);
      let val =  distBtwTwoPlaces(
          [String(this.lat),String(this.long)],
          [String(this.locationpos.latitude),String(this.locationpos.longitude)]
          )
      sessionStorage.setItem("distance",JSON.stringify(val))
    })
  }
}
