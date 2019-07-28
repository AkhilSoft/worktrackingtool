import { WorkRegistrationComponent } from "./workregistration/workregistration.component";
import { Routes } from "@angular/router";
import { ListWorkTrackingComponent } from './listworktracking/listworktracking.component';
export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'workregistration' },
    {
        path: "workregistration",
        component: WorkRegistrationComponent
    },
    {
        path: "list-work-tracking",
        component: ListWorkTrackingComponent
    }
];