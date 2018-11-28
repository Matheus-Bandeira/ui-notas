import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
  })
export class NotasService {

    private api = "http://localhost:8080"

    constructor(private http: HttpClient){}

    listar():Observable<any>{
        return this.http.get<any>(`${this.api}/notas`);
    }

    adicionar(nota: any):Observable<any>{
        return this.http.post<any>(`${this.api}/notas`, nota);
    }
}