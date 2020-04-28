import { Component, Inject, OnInit, Optional } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { MAT_DIALOG_DATA, MatDialog } from "@angular/material/dialog";

import { Medico } from "../store/model/model";
import { MedicoApiService } from "./../store/medicoApiService";

@Component({
  selector: "app-medico-form",
  templateUrl: "./medico-form.component.html",
  styleUrls: ["./medico-form.component.css"],
})
export class MedicoFormComponent implements OnInit {
  /*-------------------------------------------------------------------
   *                           ATTRIBUTES
   *-------------------------------------------------------------------*/

  form = new FormGroup({
    id: new FormControl("", [Validators.required]),
    nome: new FormControl("", [Validators.required]),
    crm: new FormControl("", [Validators.required]),
    endereco: new FormGroup({
      id: new FormControl("", [Validators.required]),
      pais: new FormControl(""),
      cidade: new FormControl(""),
      estado: new FormControl(""),
      logradouro: new FormControl(""),
      bairro: new FormControl(""),
      cep: new FormControl(""),
      numero: new FormControl(""),
    }),
  });

  private adicao: boolean;
  /*-------------------------------------------------------------------
   *                           CONSTRUCTORS
   *-------------------------------------------------------------------*/
  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public medico: Medico,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private api: MedicoApiService
  ) {}
  /*-------------------------------------------------------------------
   *                           BEHAVIORS
   *-------------------------------------------------------------------*/
  /**
   *
   */
  ngOnInit(): void {
    console.log(this.medico);
    if (this.medico != null || this.medico != undefined) {
      this.adicao = false;
      this.form.patchValue(this.medico);
    } else {
      this.adicao = true;
    }
  }
  /**
   *
   */
  public close() {
    this.dialog.closeAll();
  }

  /**
   *
   */
  public save() {
    if (!this.form.invalid) return;
    console.log(this.form.value);

    this.medico = this.form.value;
    console.log(this.medico.id);

    if (this.medico.id) {
      this.api.update(this.medico).subscribe(
        (res) => {
          this.medico = res;
          this.snackBar.open("Salvo com sucesso", "FECHAR", {
            duration: 100000,
          });
          this.dialog.closeAll();
        },
        (erro) => {
          this.snackBar.open(JSON.parse(erro._body).message, "FECHAR", {
            duration: 100000,
          });
        }
      );
    } else {
      this.api.save(this.medico).subscribe(
        (res) => {
          this.medico = res;
          this.snackBar.open("Salvo com sucesso", "FECHAR", {
            duration: 100000,
          });
          this.dialog.closeAll();
        },
        (erro) => {
          this.snackBar.open(JSON.parse(erro._body).message, "FECHAR", {
            duration: 100000,
          });
        }
      );
    }
  }
}
