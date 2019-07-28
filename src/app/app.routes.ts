import { LoginComponent } from "./login/login.component";
import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";

export const ROUTES: Routes = [
  { path: '', pathMatch:'full',redirectTo: 'app' },
  {
    path:'login',
    component:LoginComponent
  },  
  {
    path:'app',
    loadChildren:'./main/main.module#MainModule'
  }
];
