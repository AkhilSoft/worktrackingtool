import { AuthService } from "./../../base/auth.service";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  host: { 'class': 'sidebar bg-light' }
})
export class SidebarComponent implements OnInit {
  projectDetails = require('../../base/projectdetails.json');
  user: any;
  sideBarMenu=[];
  constructor(private auth: AuthService,private router:Router) {
    this.user = this.auth.user;
    if(this.auth.roleId==2){
      this.sideBarMenu = [
        {
          label: 'Work Tracking',
          path: 'app/m/workregistration'
        },
        {
          label: 'List Work Tracking',
          path: 'app/m/list-work-tracking'
        }
      ];
    }else if(this.auth.roleId==1){
      this.sideBarMenu = [
        {
          label: 'List Work Tracking',
          path: 'app/m/list-work-tracking'
        },
        {
          label: 'Work Tracking',
          path: 'app/m/workregistration'
        }
      ];
    }
    if(this.sideBarMenu && this.sideBarMenu[0])
    this.navigateTo(this.sideBarMenu[0].path)
    else{
      this.navigateTo('/login')
    }
  }

  ngOnInit() {
  }

  isActive(path:string):boolean{
    let url=this.router.url;
    return url.includes(path);
  }
  navigateTo(path:string){
    this.router.navigateByUrl(path);
  }
}
