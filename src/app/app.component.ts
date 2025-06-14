import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { stateService } from './state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Nested Checkbox';
  stateService = inject(stateService);
  checkedItems = new Set<number>();
  Data: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.stateService.checkedids$.subscribe((set) => {
      this.checkedItems = set;
    });

    this.Data = this.stateService.checkboxData;
  }

  onToggle(item: any): void {
    this.stateService.toggle(item.id, false);
    if (!!item.children) this.toggleChildren(item);
  }

  toggleChildren(parent: any): void {
    parent?.children.forEach((child: any) => {
      this.stateService.toggle(
        child.id,
        this.stateService.toogleCheck(parent.id)
      );
      if (!!child.children) this.toggleChildren(child);
    });
  }
}
