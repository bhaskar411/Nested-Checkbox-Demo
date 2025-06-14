import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class stateService {
  private checkedids = new BehaviorSubject<Set<number>>(new Set());
  public checkboxData = [
    {
      id: 1,
      name: 'Fruits',
      children: [
        {
          id: 2,
          name: 'Banana',
          children: [
            { id: 10, name: 'Cavendish' },
            { id: 11, name: 'Lady Finger' },
          ],
        },
        { id: 3, name: 'Apple' },
        { id: 4, name: 'Mango' },
        { id: 5, name: 'Strawberry' },
      ],
    },
    {
      id: 6,
      name: 'Vegetables',
      children: [
        { id: 7, name: 'Carrot' },
        {
          id: 8,
          name: 'Broccoli',
          children: [
            { id: 12, name: 'Calabrese' },
            { id: 13, name: 'Sprouting' },
          ],
        },
      ],
    },
  ];

  public checkedids$ = this.checkedids.asObservable();

  toggle(id: number, parent: boolean) {
    const current = new Set(this.checkedids.value);

    if (current.has(id) && !parent) current.delete(id);
    else current.add(id);

    console.log(current, 'hbv');
    this.checkedids.next(current);
  }

  toogleCheck(id: number): boolean {
    const current = new Set(this.checkedids.value);
    if (current.has(id)) return true;
    return false;
  }

  toggleParent() {}
}
