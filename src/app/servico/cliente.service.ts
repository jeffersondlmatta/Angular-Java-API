import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {Cliente} from "../modelo/Cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //url da api
  private url:string = 'http://localhost:8080';

  constructor(private http:HttpClient) {

  }

  //metodo para selecionar todos os clientes
  selecionar():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url + "/listar");
  }

  //metodo para cadastrar clientes
  cadastrar(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url + "/cadastrar", cliente);
  }

  //metodo para editar clientes
  editar(cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(this.url + "/editar", cliente);
  }

  //remove cliente
  remover(id:number):Observable<void>{
    return this.http.delete<void>(this.url + "/deletar/" + id);
  }
}
