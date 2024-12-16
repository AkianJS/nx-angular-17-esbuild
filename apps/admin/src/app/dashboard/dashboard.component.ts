import { Component } from '@angular/core';
import { DxChartModule } from 'devextreme-angular';

@Component({
  selector: 'angular-monorepo-dashboard',
  standalone: true,
  imports: [DxChartModule],
  template: `
    <dx-chart
      [dataSource]="salesData"
      title="Sales Overview">
      <dxi-series
        valueField="sales"
        argumentField="month"
        type="bar">
      </dxi-series>
    </dx-chart>
  `,
  styles: [`
    :host {
      display: block;
      padding: 20px;
    }
  `]
})
export class DashboardComponent {
  salesData = [
    { month: 'January', sales: 50 },
    { month: 'February', sales: 60 },
    { month: 'March', sales: 75 },
    { month: 'April', sales: 65 },
    { month: 'May', sales: 85 },
    { month: 'June', sales: 90 }
  ];
} 