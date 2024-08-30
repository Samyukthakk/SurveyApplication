import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { ActivatedRoute } from '@angular/router';
import { Survey } from '../../shared/util';

@Component({
  selector: 'app-summary',
  standalone: true,
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent implements OnInit {
  service: DataService = inject(DataService);
  route: ActivatedRoute = inject(ActivatedRoute);
  dataProvider!: any[];
  selectedSurveyName: any;
  survey!: Survey | undefined;

  ngOnInit(): void {
    this.dataProvider = [];
    this.buildSummaryData();
  }

  buildSummaryData(): void {
    let surveyId = this.route.snapshot.params['id'];
    this.survey = this.service.getSurveyById(surveyId);
    if (this.survey) {
      this.selectedSurveyName = this.survey.name;
      let flow: number[] = this.service.flowCache.get(this.survey?.id) ?? [];
      flow.forEach((id) => {
        let que = this.service.getEvaluateById(id)?.value;
        let map: Map<number, number> =
          this.service.selectionCache.get(this.survey?.id ?? -1) ?? new Map();
        let ans = this.service.getChoiceById(map.get(id) ?? -1)?.value;
        this.dataProvider.push({ que, ans });
      });
    }
  }
}
