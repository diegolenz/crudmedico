import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RequestOptions } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class Service {
  constructor(private http: HttpClient) {}

  //public static BASE_URL = "https://d14edb5d-52fc-4f0f-a80a-a619e21c6235.mock.pstmn.io/api"
  public static BASE_URL = "http://localhost:8080/api/";
  public options: RequestOptions = new RequestOptions();

  public doPost<T>(uri: string, body: any, t?: T): Observable<any> {
    //   if (!uri.startsWith('/')) uri = '/' + uri;

    this.options.body = body;
    this.options.url = Service.BASE_URL + uri;

    return this.http.post(Service.BASE_URL + uri, body);
  }

  public doGet<T>(params: any, uri: string, t?: T): Observable<any> {
    //   if (!uri.startsWith('/')) uri = '/' + uri;
    //  if (!uri.endsWith('/')) uri += '/';

    //  this.options.params = params;
    this.options.body = params;
    this.options.params = params;
    this.options.url = Service.BASE_URL + uri;
    console.log(this.options.url);
    //this.http.get(this.options.url).subscribe((res) => return res);
    return this.http.get(this.options.url);
  }

  public doDelelete<T>(uri: string): Observable<any> {
    //   if (!uri.startsWith('/')) uri = '/' + uri;

    this.options.url = Service.BASE_URL + uri;
    console.log(Service.BASE_URL + uri);
    return this.http.delete(Service.BASE_URL + uri);
  }
  //url: string, options: { headers?: HttpHeaders | { [header: string]: string | string[]; }; observe?: "body"; params?: HttpParams | { [param: string]: string | string[]; }; reportProgress?: boolean; responseType: "arraybuffer"; withCredentials?: boolean;
}

export interface Param {
  key: string;
  value: string;
}
