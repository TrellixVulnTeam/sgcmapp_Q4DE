import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Especialidade } from '../models/especialidade';
import { ICrudService } from './i-crud-service';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadeService implements ICrudService<Especialidade> {

  constructor(private http: HttpClient) { }

  apiUrl: string = environment.apiUrl + '/config/especialidade/';

  get(termoBusca?: string): Observable<Especialidade[]> {
    let url = this.apiUrl;
    if(termoBusca){
      url += 'busca/'+termoBusca;
    }
    return this.http.get<Especialidade[]>(url);
  }

  getById(id: number): Observable<Especialidade> {
    let url = this.apiUrl + id;
    return this.http.get<Especialidade>(url);
  }

  insert(objeto: Especialidade): Observable<Especialidade> {
    return this.http.post<Especialidade>(this.apiUrl, objeto);
  }

  update(objeto: Especialidade): Observable<Especialidade> {
    return this.http.put<Especialidade>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
