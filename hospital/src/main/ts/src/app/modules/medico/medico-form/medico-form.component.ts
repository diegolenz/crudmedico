import { Component, Inject, OnInit, Optional } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
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

  form = this.fb.group({
    id: new FormControl(""),
    nome: new FormControl("", [Validators.required]),
    crm: new FormControl("", [Validators.required]),
    endereco: this.fb.group({
      id: new FormControl(""),
      pais: new FormControl("", [Validators.required]),
      cidade: new FormControl("", [Validators.required]),
      estado: new FormControl("", [Validators.required]),
      logradouro: new FormControl(""),
      bairro: new FormControl("", [Validators.required]),
      cep: new FormControl(""),
      numero: new FormControl(""),
    }),
  });

  /*-------------------------------------------------------------------
   *                           CONSTRUCTORS
   *-------------------------------------------------------------------*/
  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public medico: Medico,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private api: MedicoApiService,
    private fb: FormBuilder
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
      this.form.patchValue(this.medico);
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
    this.medico = this.form.value;

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
          this.snackBar.open(erro.error.message, "FECHAR", {
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
          this.snackBar.open(erro.error.message, "FECHAR", {
            duration: 100000,
          });
        }
      );
    }
  }
}
