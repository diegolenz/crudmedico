import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Service } from "../../../common/store/service/service";
import { Medico } from "../model/model";

@Injectable()
export class MedicoApiService extends Service {

  protected static url: String = "medico";

  public getAll(): Observable<Medico[]> {
    console.log("Procurando medicos...");
    return this.doGet(null, "medico");
  }

  public save(data): Observable<Medico> {
    console.log("Salvando obj...");
    return this.doPost("medico/add", data);
  }

  public update(data): Observable<Medico> {
    console.log("alterando obj...");
    return this.doPost("medico/update", data);
  }

  public delete(id): Observable<Medico> {
    console.log("deletando obj...");
    return this.doDelelete("medico/delete/" + id);
  }
}
