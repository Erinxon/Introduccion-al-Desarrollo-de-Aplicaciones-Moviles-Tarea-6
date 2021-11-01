import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../models/data.models';

@Injectable({
  providedIn: 'root'
})
export class ElementosService {

  constructor(private http: HttpClient) { }

  getElementos(): Observable<Data> {
    return this.http.get<Data>('/assets/elementos.json');
  }
}
