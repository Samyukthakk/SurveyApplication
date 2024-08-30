import { Injectable } from '@angular/core';
import { Choice, Evaluate, Survey } from './util';
import { answers, questions, surveys, workflow } from './data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  selectionCache!: Map<number, Map<number, number>>;
  flowCache!: Map<number, number[]>;
  constructor() {
    this.selectionCache = new Map();
    this.flowCache = new Map();
  }

  getSurveys(): Survey[] {
    return surveys;
  }

  getSurveyById(id: number): Survey | undefined {
    return surveys.find((survey) => survey.id == id);
  }

  getEvaluateById(id: number): Evaluate | undefined {
    return questions.find((question) => question.id == id);
  }

  getChoiceById(id: number): Choice | undefined {
    return answers.find((ans) => ans.id == id);
  }

  getChoice(surveyId: number, evaluateId: number): Choice[] | undefined {
    let workflows: any[] = workflow.filter(
      (choice) => choice.surveyId == surveyId && choice.evaluateId == evaluateId
    );
    let choiceIds: number[] = workflows.map((flow) => flow?.choiceId);
    return answers.filter((data) => choiceIds.includes(data.id));
  }

  getEvaluateByChoiceId(surveyId: any, choiceId: number, evaluateId: any): any {
    return workflow.find(
      (flow) =>
        flow.surveyId == surveyId &&
        flow.choiceId == choiceId &&
        flow.evaluateId == evaluateId
    )?.childEvaluateId;
  }

  setCache(surveyId: any, evaluateId: any, selectedChoiceId: any) {
    if (this.selectionCache.get(surveyId)) {
      this.selectionCache.get(surveyId)?.set(evaluateId, selectedChoiceId);
    } else {
      let selection: Map<number, number> = new Map();
      selection.set(evaluateId, selectedChoiceId);
      this.selectionCache.set(surveyId, selection);
    }

    if (selectedChoiceId == -1) {
      if (this.flowCache.get(surveyId)) {
        if (!this.flowCache.get(surveyId)?.includes(evaluateId)) {
          this.flowCache.get(surveyId)?.push(evaluateId);
        }
      } else {
        this.flowCache.set(surveyId, [evaluateId]);
      }
    }
  }

  getPrevEvaluation(surveyId: any): number {
    let flow: number[] = this.flowCache.get(surveyId) ?? [];
    let prevEvalId: any = flow.pop();
    this.flowCache.set(surveyId, flow);
    return prevEvalId;
  }

  getChoiceIdFromCache(surveyId: any, evaluateId: number): any {
    return this.selectionCache.get(surveyId)?.get(evaluateId);
  }

  getLatestFlowIdFromCache(surveyId: any): any {
    let flow: any = this.flowCache.get(surveyId);
    return flow ? flow[flow.length - 1] : -1;
  }

  clearSurveyCache(surveyId: any): void {
    this.flowCache.set(surveyId, []);
    this.selectionCache.get(surveyId)?.clear();
  }
}
