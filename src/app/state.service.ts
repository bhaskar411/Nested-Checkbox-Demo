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

  toggle(id: number) {
    const current = new Set(this.checkedids.value);

    if (current.has(id)) current.delete(id);
    else current.add(id);
    this.checkedids.next(current);
    this.checkboxData.forEach((parent) => this.verifyChecked(parent));
  }

  toggleCheck(id: number): boolean {
    const current = new Set(this.checkedids.value);
    if (current.has(id)) return true;
    return false;
  }

  toggleChildren(parent: any): void {
    parent?.children.forEach((child: any) => {
      this.toggle(child.id);
      if (!!child.children) this.toggleChildren(child);
    });
  }

  verifyChecked(node: any): boolean {
    const current = new Set(this.checkedids.value);
    if (!!!node.children) return this.toggleCheck(node.id);

    const allChildrenChecked = node?.children?.every((child: { id: number }) =>
      this.verifyChecked(child)
    );
    if (allChildrenChecked) current.add(node.id);
    else {
      if (current.has(node.id)) current.delete(node.id);
    }
    console.log(current);
    this.checkedids.next(current);

    return allChildrenChecked;
  }
}
