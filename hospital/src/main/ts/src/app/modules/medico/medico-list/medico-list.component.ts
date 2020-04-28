import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import {
  ConfirmationDialogComponent,
} from "src/app/layout/notification/confirm/confirmation-dialog.component";

import { MedicoFormComponent } from "../medico-form/medico-form.component";
import { MedicoApiService } from "../store/medicoApiService";
import { Medico } from "../store/model/model";

@Component({
  selector: "app-heroes-list",
  templateUrl: "./medico-list.component.html",
  styleUrls: ["./medico-list.component.css"],
})
export class MedicoListComponent implements OnInit {
  constructor(public dialog: MatDialog, private api: MedicoApiService) {}

  public medicos: Medico[];
  displayedColumns: string[] = ["nome", "crm", "acoes"];

  ngOnInit(): void {
    this.findMedicos();
  }

  private findMedicos() {
    this.api.getAll().subscribe((res) => {
      console.log(res);
      this.medicos = res;
    });
  }

  public add() {
    const dialogRef = this.dialog.open(MedicoFormComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      this.findMedicos();
    });
  }

  public edit(medico: Medico) {
    const dialogRef = this.dialog.open(MedicoFormComponent, { data: medico });
    dialogRef.afterClosed().subscribe((result) => {
      this.findMedicos();
    });
  }

  public delete(medico: Medico) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: "350px",
      data: "Voce realmente deseja deletar o médico " + medico.nome + "?",
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.api.delete(medico.id).subscribe((res) => {
          this.findMedicos();
        });
      }
    });
  }
}
