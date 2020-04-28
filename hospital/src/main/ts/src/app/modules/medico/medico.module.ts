import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
} from "@angular/material";
import { MatTableModule } from "@angular/material/table";
import {
  NotificationModule,
} from "src/app/layout/notification/notification.module";

import { MedicoFormComponent } from "./medico-form/medico-form.component";
import { MedicoListComponent } from "./medico-list/medico-list.component";
import { MedicoRouting } from "./medico.routing";
import { MedicoApiService } from "./service/medicoApiService";

@NgModule({
  declarations: [MedicoFormComponent, MedicoListComponent],
  imports: [
    CommonModule,
    MedicoRouting,
    MatDialogModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    NotificationModule,
  ],
  exports: [],
  entryComponents: [MedicoFormComponent, MedicoListComponent],
  providers: [MedicoApiService],
})
export class MedicoModule {}
