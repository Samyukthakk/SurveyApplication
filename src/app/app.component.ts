import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EvaluateComponent } from './pages/evaluate/evaluate.component';
import { Survey } from './shared/util';
import { CommonModule } from '@angular/common';
import { DataService } from './shared/data.service';
import { SummaryComponent } from './pages/summary/summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EvaluateComponent, CommonModule, RouterModule, SummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'whoareyou';
  surveys!: Survey[];
  selectedindex!: number;

  activeColor = 'text-success';
  inActiveColor = 'text-danger';
  isActive = true;
  constructor(private service: DataService) {}
  ngOnInit(): void {
    this.surveys = this.service.getSurveys();
  }

  setActiveClass(id: any) {
    this.selectedindex = id;
  }
}
