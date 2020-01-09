import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiSchemaService {

  constructor(private http: HttpClient) {
  }

  getSchema() {
    return this.http.get('/api/meta/types') as Observable<ResourceType[]>;
  }
}
