import { Injectable } from "@angular/core";
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QueryService{
  public queryUrl = `${environment.db_url}/gather-query`

  constructor(
    private http: HttpClient
  ) { }
  generalQuery(query: string) {
    return this.http.get(`${this.queryUrl}/any/${query}`);
  }
}