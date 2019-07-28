import { ComplexDetails } from "./../pojo/complexdetails";

import { Injectable } from '@angular/core';
import { UserDetails } from 'app/pojo/userdetails';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin:boolean=true;
  roleId=-1;
  user:UserDetails=new UserDetails();
  constructor() { 
    
  }
}
