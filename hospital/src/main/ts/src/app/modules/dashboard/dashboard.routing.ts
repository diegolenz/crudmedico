import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardFormComponent } from "./dashboard/dashboard-form.component";

const dashboardRoutes: Routes = [
  {
    path: "dashboard",
    component: DashboardFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule],
})
export class DashboardRouting {}
