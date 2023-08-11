import { Component } from '@angular/core';
import { BioService } from '../services/bio.service';
import { HeaderService } from '../services/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  bio$ = this.bioService.getBio();
  isHome$ = this.headerService.isHome();

  menuItems = [
    { title: 'About Me', homePath: '/', fragment: 'about', pagePath: '/about' },
    {
      title: 'My Projects',
      homePath: '/',
      fragment: 'projects',
      pagePath: '/projects',
    },
    {
      title: 'Contact Me',
      homePath: '/',
      fragment: 'contact',
      pagePath: '/contact',
    },
  ];

  constructor(
    private bioService: BioService,
    private headerService: HeaderService,
    private router: Router
  ) {}

  scrollToTop(): void {
    this.router.navigate(['/'], { fragment: 'home' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
