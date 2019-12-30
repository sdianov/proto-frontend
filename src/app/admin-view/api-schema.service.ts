import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiSchemaService {

  constructor(private http: HttpClient) {
  }

  getSchema() {
    return this.http.get('/api/meta/types');
  }
}
