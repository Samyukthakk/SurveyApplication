import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Choice, Evaluate, Survey } from '../../shared/util';
import { DataService } from '../../shared/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evaluate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evaluate.component.html',
  styleUrl: './evaluate.component.scss',
})
export class EvaluateComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  service: DataService = inject(DataService);
  survey!: Survey | undefined;
  isBack!: boolean;
  isReset!: boolean;
  isNext!: boolean;
  evaluate!: Evaluate | undefined;
  choices!: Choice[] | undefined;
  name: string = '';
  choiceSelected: number = -1;

  ngOnInit(): void {
    let surveyId = this.route.snapshot.params['id'];
    this.router.events.subscribe((value) => {
      if (value instanceof NavigationEnd && value.url.indexOf('survey') > -1) {
        this.initialize(this.route.snapshot.params['id']);
      }
    });
    this.initialize(surveyId);
  }

  initialize(surveyId: number) {
    this.survey = this.service.getSurveyById(surveyId);
    let latestEvalId = this.service.getLatestFlowIdFromCache(this.survey?.id);
    if (latestEvalId > -1) {
      this.populateEvaluation(latestEvalId);
    } else {
      this.populateEvaluation(this.survey?.startId);
    }
  }

  populateEvaluation(evaluateId: any) {
    this.evaluate = this.service.getEvaluateById(evaluateId);
    this.service.setCache(this.survey?.id, this.evaluate?.id, -1);
    if (this.evaluate && this.survey) {
      this.choices = this.service.getChoice(this.survey.id, this.evaluate.id);
    }
  }

  onChoose(choiceId: number): void {
    this.service.setCache(this.survey?.id, this.evaluate?.id, choiceId);
    let evaluateId = this.service.getEvaluateByChoiceId(
      this.survey?.id,
      choiceId,
      this.evaluate?.id
    );
    this.populateEvaluation(evaluateId);
  }

  onReset() {
    this.service.clearSurveyCache(this.survey?.id);
    this.populateEvaluation(this.survey?.startId);
  }

  showSummary() {
    this.router.navigate(['/summary', this.route.snapshot.params['id']]);
  }
}
