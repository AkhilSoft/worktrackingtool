import { CommonModule } from "@angular/common";
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ROUTES } from "./wtt.routes";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { WorkRegistrationComponent } from './workregistration/workregistration.component';
import { ListWorkTrackingComponent } from './listworktracking/listworktracking.component';
@NgModule({
    declarations: [
      WorkRegistrationComponent,
      ListWorkTrackingComponent
    ],
    imports: [
      ReactiveFormsModule,
      CommonModule,
      FormsModule,
      MatInputModule,
      MatDatepickerModule,
      MatSelectModule,
      MatNativeDateModule,
      MatCheckboxModule,
      RouterModule.forChild(ROUTES),
    ],
    providers: [ ]
  })
  export class WTTModule { }