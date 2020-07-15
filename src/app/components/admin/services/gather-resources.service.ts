import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { GatherResource } from 'src/shared/models/gather-resources.model';

@Injectable()
export class GatherResourcesService {
  private url = `${environment.db_url}/gather-resources`
  constructor(
    private http: HttpClient
  ) { }
  
  getAll() {
    return this.http.get(this.url);
  }

  delete(name: string) {
    return this.http.delete(`${this.url}/${name}`);
  }

  create(newRes: GatherResource) {
    return this.http.post(this.url, newRes);
  }

  edit(name: string, newRes: GatherResource) {
    return this.http.put(`${this.url}/${name}`, newRes);
  }
}