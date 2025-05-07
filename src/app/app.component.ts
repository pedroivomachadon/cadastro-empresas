import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <header>
      <nav>
        <a routerLink="/">Home</a>
        <a routerLink="/cadastro">Cadastro</a>
      </nav>
    </header>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav { background: #f8f9fa; padding: 1rem; }
    nav a { margin-right: 1rem; text-decoration: none; color: #0066cc; }
  `]
})
export class AppComponent {}