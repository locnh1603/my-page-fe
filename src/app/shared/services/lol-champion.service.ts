import { Injectable } from "@angular/core";
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChampionService {
  url = environment.ddurl;
  constructor(
    private http: HttpClient
  ) { }

  fetchChampionNameList() {
    const url = `${this.url}/champion.json`
    return this.http.get(url);
  }
}