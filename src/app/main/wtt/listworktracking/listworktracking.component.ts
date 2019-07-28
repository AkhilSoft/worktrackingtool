import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/base/auth.service';

@Component({
  selector: 'listworktracking',
  templateUrl: './listworktracking.component.html',
  styleUrls: ['./listworktracking.component.css']
})
export class ListWorkTrackingComponent implements OnInit {
  records = require("./records")

  constructor(private auth: AuthService) {
    if (this.auth.roleId == 2) {
      let records = [];
      for (let i = 0; i < this.records.length; i++) {
        if (this.records[i].name == this.auth.user.name) {
          records.push(this.records[i]);
        }
      }
      this.records = records;
    }
  }

  ngOnInit() {
  }



}
