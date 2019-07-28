import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./navbar/navbar.component";
import { MainComponent } from "./main.component";
import { ROUTES } from "./main.routes";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InvalidComponent } from './invalid/invalid.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        MainComponent,
        NavbarComponent,
        SidebarComponent,
        InvalidComponent
    ],
    imports: [
      ReactiveFormsModule,
      FormsModule,
      CommonModule,
      RouterModule.forChild(ROUTES),
    ],
    providers: [ ]
  })
  export class MainModule { }