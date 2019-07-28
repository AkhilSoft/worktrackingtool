import { AuthService } from "./../base/auth.service";

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-app',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { 
        if(this.auth.isLogin==false){
          this.router.navigate(['/login']);
        }
  }

  ngOnInit() {
  }
    
}


