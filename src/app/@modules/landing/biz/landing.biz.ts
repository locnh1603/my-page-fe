import { Injectable } from "@angular/core";
import { QueryService } from '@modules/landing/services/query.service';

@Injectable()
export class LandingBiz {
  constructor(
    private queryService: QueryService
  ) { }

  generalQuery(query: string) {
    
  }
}