import { Injectable } from '@angular/core';
import { Store, Actions, ofActionDispatched } from '@ngxs/store';
import { map } from 'rxjs/operators';
import { Action } from 'src/shared/models/action.model';

@Injectable({ providedIn: 'root' })
export class Dispatcher {
  readonly fire = (action: Action | Action[]) => this.store.dispatch(action);
  readonly actionOf$ = (action: Action) =>  this.actions$
    .pipe(
      ofActionDispatched(action),
      map(act => act.payload)
    )

  constructor(
    private actions$: Actions,
    private store: Store
  ) { }
}
