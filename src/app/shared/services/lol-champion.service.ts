import { Injectable } from "@angular/core";
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ddragonEndPointEnum } from 'shared/enums/endpoints.enum';
import { ChampionCompact, Champion } from 'shared/models/lol-champion.model';

@Injectable()
export class ChampionService {
  url = environment.ddurl;
  constructor(
    private http: HttpClient
  ) { }

  fetchChampionList(): Observable<ChampionCompact[]> {
    const url = `${this.url}/${ddragonEndPointEnum.Champion}.json`;
    return this.http.get<any>(url).pipe(map((res: any) => { 
      return Object.keys(res.data).map(k => res.data[k]);
    }));
  }

  fetchChampionDetail(championName: string): Observable<Champion> {
    const url = `${this.url}/${ddragonEndPointEnum.Champion}/${championName}.json`;
    return this.http.get<any>(url).pipe(map((res: any) => {
      return res.data[championName];
    }));
  }
}