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
    {
      name: 'OFC App',
      description: `App that delivers call center management features over rules, services and campaigns. This project is inspired by a real case study, but no real data or design elements are directly tied to the original system.`,
      overview: ``,
      originalStack: 'Power Platform - Power Apps - Power Automate - SharePoint - Power BI',
      GitHubStack: 'php Laravel - MySQL - XAMPP',
      url: 'https://github.com/antonlabellarte/ofcapp'
    },
    {
      name: 'Call management App',
      description: `App that delivers call center management features over rules, services and campaigns.
This project is inspired by a real case study, but no real data or design elements are directly tied to the original system.`,
      overview: ``,
      originalStack: 'Power Platform - Power Apps - Power Automate - Azure SQL',
      GitHubStack: 'php Laravel - MySQL - XAMPP',
      url: 'https://github.com/antonlabellarte/callManager'
    },

    {
      name: 'Estate Agency App',
      description: `App that delivers managament over estate agency transaction`,
      overview: ``,
      originalStack: 'Power Platform - Power Apps - Power Automate - Azure SQL',
      GitHubStack: 'php Laravel - MySQL - XAMPP',
      url: ''
    },

    {
      name: 'Portfolio Website',
      description: ``,
      overview: ``,
      originalStack: 'N/D',
      GitHubStack: 'Angular - TypeScript',
      url: 'https://github.com/antonlabellarte/newPortfolioWebSite'
    },

  ]

  experiences = [
    {
      enterprise: 'Studio Cicchelli S.r.l. ',
      date: 'October 2023 - Presente',
      role: 'Software Developer',
      description: `Software development, Azure SQL databases; Microsoft 365 tenant administration; Microsoft 365 products and licensing; Mail flows and rules/policies; Help desk support interventions; Installation and configuration of Asterisk PBX for the development and maintenance of VoIP phone systems for private networks; Development and maintenance of interactive flow diagrams on VoIP bots.`,
      icon: 'assets/enterprisesIcons/sc.jpeg'
    },
    {
      enterprise: 'Computer Sharing Sud S.r.l.',
      date: 'December 2022 - April 2023 · 5 months',
      role: 'Software Developer',
      description:  `Software development for IBM i (AS/400) information systems, main languages: RPG and RPG Free (ILE). Development IDEs: RDi and SEU.`,
      icon: 'assets/enterprisesIcons/css.jpeg'
    },
    {
      enterprise: 'Labelmar S.n.c - Monopoli BA()',
      date: 'September 2016 - April 2018 · 1 year 8 months',
      role: 'Administrative Assistant',
      description: `Tax warehouse operations for wholesale trade of salts, tobacco, and stationery products; SAP software; merchandise reorganization; goods delivery.`,
      icon: 'assets/enterprisesIcons/labelmar.jpeg'
    }
  ]

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // scroll animato
    });
  }
}
