import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  stack = [
    {id: 'HTML'},
    {id: 'CSS'},
    {id: 'JavaScript'},
    {id: 'php'},
    {id: 'Laravel'},
    {id: 'Angular'},
  ]
}
