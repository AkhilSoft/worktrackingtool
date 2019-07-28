import { AuthService } from "./../base/auth.service";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidation } from '../CustomValidation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form= new FormGroup ({
    email: new FormControl("",[Validators.required]),
   password:new FormControl("",[Validators.required]),
    
  });

  statusMessage:string='';

  constructor(private http:HttpClient,private auth:AuthService,private router:Router) { 
    console.log('login-constructor')
  }

  ngOnInit() {
  }

  login(email){
    let emp={
    "emailId":this.form.value.email,
      "password":this.form.value.password
      }
        if(emp.emailId=='manager'&&emp.password=='abc')
        {
          this.auth.isLogin=true;
          this.auth.user.name="Manager";

          this.auth.roleId=1;
          console.log("login success");
          this.router.navigateByUrl('/');
        }
        else  if(emp.emailId=='user'&&emp.password=='abc')
        {
          this.auth.isLogin=true;
          this.auth.roleId=2;
          this.auth.user.name="Sai";
          
          console.log("login success");
          this.router.navigateByUrl('/');
        }
        else  
        {
          this.statusMessage="Invalid Password/Email";
          this.auth.isLogin=false;
          this.auth.roleId=-1;
        }
    
      }
    
    
  }


