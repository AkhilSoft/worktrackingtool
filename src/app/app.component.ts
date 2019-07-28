import { AuthService } from "./base/auth.service";

/**
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';

export const ROOT_SELECTOR = 'app';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: ROOT_SELECTOR,
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
      <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  public projectName = 'Office Work Tracking Tool';

  constructor(private auth:AuthService,
    private router:Router
  ) {
    console.log('login-constructor')
    // if(this.auth.isLogin==true){
    //   this.router.navigateByUrl('')
    // }
  }

  public ngOnInit() {

  }

}

