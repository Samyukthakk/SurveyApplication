export interface Survey {
  id: number;
  name: string;
  startId: number;
}

export interface Evaluate {
  id: number;
  value: string;
}

export interface Choice {
  id: number;
  value: string;
}

export interface WorkFlow {
  choiceId: number;
  evaluateId: number;
  childEvaluateId: number;
  surveyId: number;
}

export interface SelectionCache {
  surveyId: number,
  evaluateId: number,
  selectedChoiceId: number
}