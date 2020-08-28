import { Injectable } from "@angular/core";
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ddragonEndPointEnum } from 'shared/enums/endpoints.enum';
import { Item } from 'shared/models/lol-item.model';

@Injectable()
export class ItemService {
  url = environment.ddurl;
  constructor(
    private http: HttpClient
  ) { }

  fetchItemList(): Observable<Item[]> {
    const url = `${this.url}/${ddragonEndPointEnum.Item}.json`;
    return this.http.get<any>(url).pipe(map((res: any) => {
      return Object.keys(res.data).map(k => res.data[k]);
    }));
  }
}