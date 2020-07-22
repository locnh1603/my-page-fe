import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { GatherResource } from 'src/shared/models/gather-resources.model';
import { GatherCraft } from 'src/shared/models/gather-craft.model';

@Injectable()
export class GatherCraftsService {
  private url = `${environment.db_url}/gather-crafts`
  constructor(
    private http: HttpClient
  ) { }
  
  getAll() {
    return this.http.get(this.url);
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }

  create(entity: GatherCraft) {
    return this.http.post(this.url, entity);
  }

  edit(id: string, entity: GatherCraft) {
    return this.http.put(`${this.url}/${id}`, entity);
  }
}