import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private http: HttpClient) {
  }

  getGenericItems(typeName: string) {
    return this.http.get('/api/rest/' + typeName);
  }


}
