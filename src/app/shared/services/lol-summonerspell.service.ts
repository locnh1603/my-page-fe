import { Injectable } from "@angular/core";
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ddragonEndPointEnum, cdragonEndpointEnum } from 'shared/enums/endpoints.enum';
import { Item } from 'shared/models/lol-item.model';
import { Rune } from 'shared/models/lol-rune.model';
import { SummonerSpell } from 'shared/models/lol-summoner-spells.model';

@Injectable()
export class SummonerSpellService {
  url = environment.cdurl;
  constructor(
    private http: HttpClient
  ) { }

  fetchSummonerList(): Observable<SummonerSpell[]> {
    const url = `${this.url}/${cdragonEndpointEnum.SummonerSpell}.json`;
    return this.http.get<SummonerSpell[]>(url);
  }
}