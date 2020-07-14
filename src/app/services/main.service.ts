import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class MainService {
  url = environment.db_url;
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.url}/gather-resources`);
  }
}