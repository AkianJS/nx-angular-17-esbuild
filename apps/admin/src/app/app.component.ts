import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  standalone: true,
  imports: [RouterModule, DashboardComponent],
  selector: 'angular-monorepo-root',
  template: `
    <h1>{{ title }}</h1>
    <angular-monorepo-dashboard></angular-monorepo-dashboard>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Admin Dashboard';
}
