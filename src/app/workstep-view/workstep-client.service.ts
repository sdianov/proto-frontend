import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { WorkstepData } from './interfaces';
import { openDB, DBSchema } from 'idb';
import { IDBPDatabase } from 'idb/lib/entry';

@Injectable({
  providedIn: 'root'
})
export class WorkstepClientService {

  db: IDBPDatabase<any> = null;

  async open() {
    return openDB<any>('WSStore', 1, {
      upgrade(db) {
        const store = db.createObjectStore('workstep', {
          keyPath: 'id', autoIncrement: true
        });
        store.createIndex('ix_title', 'title', {unique: true});
      },
    });
  }

  constructor(private http: HttpClient) {
  }

  async getWorksteps(): Promise<WorkstepData[]> {

    return (await this.open()).getAll('workstep');
  }

  async getWorkstep(id: string): Promise<WorkstepData> {
    const result = await (await this.open()).get('workstep', id);
    console.log('>>' + JSON.stringify(result));
    return result;
  }

  async addWorkstep() {
    return (await this.open()).add('workstep', {title: '123456', description: 'wsdfsds'});
  }

  async deleteWorkstep(id: string): Promise<void> {
    (await this.open()).delete('workstep', id);
  }

  async updateWorkstep(data: WorkstepData) {
    return (await this.open()).put('workstep', data);
  }

}
