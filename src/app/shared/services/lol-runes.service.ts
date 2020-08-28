import { Injectable } from "@angular/core";
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ddragonEndPointEnum, cdragonEndpointEnum } from 'shared/enums/endpoints.enum';
import { Item } from 'shared/models/lol-item.model';
import { Rune } from 'shared/models/lol-rune.model';

@Injectable()
export class RuneService {
  url = environment.cdurl;
  constructor(
    private http: HttpClient
  ) { }

  fetchRuneList(): Observable<Rune[]> {
    const url = `${this.url}/${cdragonEndpointEnum.Rune}.json`;
    return this.http.get<Rune[]>(url);
  }
}