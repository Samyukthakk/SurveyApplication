import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { Choice, Evaluate, Survey } from './util';

describe('AppService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('Should create DataService', () => {
    expect(service).toBeTruthy();
  });

  it('GetSurveyById', () => {
    let survey: Survey | undefined = service.getSurveyById(1);
    expect(survey?.id).toEqual(1);
  });

  it('GetSurveys', () => {
    let surveys: Survey[] = service.getSurveys();
    expect(surveys.length).toEqual(2);
  });

  it('GetChoice', () => {
    let choice: Choice | undefined = service.getChoiceById(200);
    expect(choice?.value).toEqual("Energetic");
  });

  it('GetEvaluateByChoiceId', () => {
    let evaluateId: number | undefined = service.getEvaluateByChoiceId(1, 100, 1);
    expect(evaluateId).toEqual(2);
    let evaluate: Evaluate | undefined = service.getEvaluateById(evaluateId ?? 1);
    expect(evaluate?.value).toEqual("Do you follow rules?");
  });
  
});
