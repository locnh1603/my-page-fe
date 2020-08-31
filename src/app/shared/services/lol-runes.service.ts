import { Injectable } from "@angular/core";
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ddragonEndPointEnum, cdragonEndpointEnum } from 'shared/enums/endpoints.enum';
import { Rune, RunesGrouped } from 'shared/models/lol-rune.model';
import { RuneGroupsEnum } from 'shared/enums/runes.enum';

@Injectable()
export class RuneService {
  url = environment.cdurl;
  constructor(
    private http: HttpClient
  ) { }

  fetchRuneList(): Observable<RunesGrouped[]> {
    const url = `${this.url}/${cdragonEndpointEnum.Rune}.json`;
    return this.http.get<Rune[]>(url).pipe(
      map((res: Rune[]) => {
        return res.map(r => Rune.parseRune(r));
      }),
      map((res: Rune[]) => {
        const groups: RunesGrouped[] = [];
        res.forEach(r => {
          const targetGroup = groups.find(g => g.name === r.group)
          if(!targetGroup) {
            groups.push(new RunesGrouped(r.group));
            groups[groups.length-1].runes.push(r);
          } else {
            targetGroup.runes.push(r);
          }
        })
        return groups;
      })
    );
  }
}