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
    {id: 'HTML', icon: 'assets/codesIcons/html.png' },
    {id: 'CSS', icon: 'assets/codesIcons/css.png'},
    {id: 'JavaScript', icon: 'assets/codesIcons/js.png'},
    {id: 'php', icon: 'assets/codesIcons/php.png'},
    {id: 'Laravel', icon: 'assets/codesIcons/laravel.png'},
    {id: 'Angular', icon: 'assets/codesIcons/angular.png'},
  ]
}
