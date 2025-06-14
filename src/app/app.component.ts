import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Nested Checkbox';
  checkedItems = new Set<number>([1, 2, 5]);
  checkboxData = [
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

  ngOnInit(): void {}

  onToggle(id: number): void {}
}
