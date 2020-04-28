import { NgModule } from "@angular/core";

import { DashboardRouting } from "./dashboard.routing";
import { DashboardFormComponent } from "./dashboard/dashboard-form.component";

@NgModule({
  declarations: [DashboardFormComponent],
  imports: [DashboardRouting],
  exports: [DashboardFormComponent, DashboardRouting],
  entryComponents: [DashboardFormComponent],
  providers: [],
})
export class DashboardModule {}
