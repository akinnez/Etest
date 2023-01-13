import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:"home",
    pathMatch:'full',
    redirectTo:""
  },
  {
    path:"",
    loadComponent: ()=>import('./views/landing/component/landing.component').then(_=>_.LandingComponent),
  },
  {
    path: "login",
    loadComponent: ()=>import("./views/login/component/login.component").then(_=>_.LoginComponent),
  },
  {
    path: "signup",
    loadComponent: ()=>import('./views/signup/component/signup.component').then(_=>_.SignupComponent),
  },
  {
    path: "user/:id",
    loadComponent: ()=>import('./views/landing/component/landing.component').then(_=>_.LandingComponent),
  },
  {
    path:"**",
    loadComponent: ()=>import('./views/notfound/notfound.component').then(_=>_.NotfoundComponent),
  }
];


export class AppRoutingModule { }
