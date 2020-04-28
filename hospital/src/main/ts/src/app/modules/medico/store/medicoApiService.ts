import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Service } from "../../../common/store/service/service";
import { Medico } from "./model/model";

@Injectable()
export class MedicoApiService extends Service {
  /* constructor() {
    super();
  }
 */
  protected static url: String = "medico";

  public getAll(): Observable<Medico[]> {
    /*  this.doGet(null, "Person").subscribe(res => {
      console.log(res);
    }); */
    console.log("Procurando medicos...");
    return this.doGet(null, "medico");
  }

  public save(data): Observable<Medico> {
    console.log("Salvando obj...");
    console.log(data);
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

/*  search(params) {
    return;
  }

 save(data, options?) {
    console.log("Salvando obj...");
    return of({ ...data, id: 1 });
  }

  update(id, data, options?) {
    console.log("Alterando obj");
    return of(data);
  }

  find(id, params) {
    return this.search(id).pipe(
      map(res => {
        return { ...res[0], operators: [1, 2] };
      })
    );
  }

  searchOperators(params) {
    return this.http
      .get<Response20x>(`${environment.URL_API}/rapi/guardian/users`, {
        params
      })
      .pipe(map(result => result.data));
  }

  remove(id, options?) {
    return of(true);
  }  */
