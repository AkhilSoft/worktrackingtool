import { ComplexDetails } from "./../../pojo/complexdetails";
import { AuthService } from "./../../base/auth.service";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  projectDetails=require('../../base/projectdetails.json');
  constructor(private auth:AuthService,private router:Router) {
  }

  ngOnInit() {
  }

  logout(){
    // this.auth.complexDetails=new ComplexDetails();
    this.auth.isLogin=false;
    window.localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
