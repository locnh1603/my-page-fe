import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { GatherCuisine } from 'shared/models/gather-cuisines.model';

@Injectable()
export class GatherCuisineService {
  private url = `${environment.db_url}/gather-cuisines`
  constructor(
    private http: HttpClient
  ) { }
  
  getAll() {
    return this.http.get(this.url);
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }

  create(entity: GatherCuisine) {
    return this.http.post(this.url, entity);
  }

  edit(id: string, entity: GatherCuisine) {
    return this.http.put(`${this.url}/${id}`, entity);
  }
}