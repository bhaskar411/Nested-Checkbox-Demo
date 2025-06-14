import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class stateService {
  private checkedids = new BehaviorSubject<Set<number>>(new Set());

  public checkedids$ = this.checkedids.asObservable();

  toggle(id: number) {
    const current = new Set(this.checkedids.value);

    if (current.has(id)) current.delete(id);
    else current.add(id);

    console.log(current, 'hbv');
    this.checkedids.next(current);
  }
}
