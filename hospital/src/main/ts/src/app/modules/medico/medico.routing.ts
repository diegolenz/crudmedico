import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MedicoFormComponent } from "./medico-form/medico-form.component";
import { MedicoListComponent } from "./medico-list/medico-list.component";

const medicoRoutes: Routes = [
  {
    path: "",
    component: MedicoListComponent,
  },
  {
    path: "nova",
    component: MedicoFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(medicoRoutes)],
  exports: [RouterModule],
})
export class MedicoRouting {}
