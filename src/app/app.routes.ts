import { Routes } from '@angular/router';
import { EvaluateComponent } from './pages/evaluate/evaluate.component';
import { SummaryComponent } from './pages/summary/summary.component';

export const routes: Routes = [
  { path: 'survey/:id', component: EvaluateComponent },
  { path: 'summary/:id', component: SummaryComponent}
];
