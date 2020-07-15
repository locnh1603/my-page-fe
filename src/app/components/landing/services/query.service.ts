import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

@Injectable()
export class QueryService{
  public queryUrl = `${environment.db_url}/gather-query`
}