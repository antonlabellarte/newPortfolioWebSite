import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  works = [
    { name: 'OFC App',
      description: `App that delivers call center management features over rules, services and campaigns. This project is inspired by a real case study, but no real data or design elements are directly tied to the original system.`,
      overview: ``
    },
    { name: 'Call manager APP', description: '' },
  ]

  experiences = [
    {
      enterprise: 'Studio Cicchelli S.r.l. ',
      date: '',
      role: '',
      description: '',
      icon: 'assets/enterprisesIcons/sc.jpeg'
    },
    {
      enterprise: 'Computer Sharing Sud S.r.l.',
      date: '',
      role: '',
      description: '',
      icon: 'assets/enterprisesIcons/css.jpeg'
    },
  ]
}
