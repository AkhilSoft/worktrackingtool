import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'workregistration',
  templateUrl: './workregistration.component.html',
  styleUrls: ['./workregistration.component.css']
})
export class WorkRegistrationComponent implements OnInit {
  activities=["Development", "Ticketing", "Improvement", "Break"];
  subActivities={
    "Development":["Coding", "Unit Testing", "Deployment", "Code Review"],
    "Ticketing":[ "Incident", "Service Request"],
    "Improvement":[ "Lessons learnt", "automation"],
    "Break":["Lunch", "Extracurricular activity"]
  };
  timeUsedOptions=[30,45,60,90,120];
  isOOO:boolean=false;
  reg:any={};
  constructor() { 
    this.reg.date=new Date();
    this.reg.activity=""
  }

  ngOnInit() {
  }

  submitReg(){
    console.log(this.reg);
  }
  outOfOffice(){
    if(this.isOOO){
      this.reg={};
      this.timeUsedOptions.splice(
        this.timeUsedOptions.indexOf(480)
        , 1);
    }else{
      this.reg={};
      this.timeUsedOptions.push(480);
      this.reg.timeUsed=480;
      this.reg.comment="OOO";
    }
  }
}
