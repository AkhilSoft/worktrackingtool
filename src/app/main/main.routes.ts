import { InvalidComponent } from "./invalid/invalid.component";
import { Routes } from "@angular/router";
import { MainComponent } from "./main.component";
export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'm' },
    { path: 'm', component: MainComponent , children: [
        {
          path: "", loadChildren: "./wtt/wtt.module#WTTModule"
        }
      ] 
    },
    {
        path: "**",
        component: InvalidComponent
    },
];
