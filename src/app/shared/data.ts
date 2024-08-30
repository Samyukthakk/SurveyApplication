import { Choice, Evaluate, WorkFlow, Survey } from './util';

export const surveys: Survey[] = [
  {
    id: 1,
    name: 'Personality',
    startId: 1,
  },
  {
    id: 2,
    name: 'Sports',
    startId: 11,
  },
];

export const questions: Evaluate[] = [
  {
    id: 1,
    value: 'How do you see yourself ?',
  },
  {
    id: 2,
    value: 'Do you follow rules?',
  },
  {
    id: 3,
    value: 'Eye for an eye?',
  },
  {
    id: 4,
    value: 'You are a confident person!!😎',
  },
  {
    id: 5,
    value: 'You are emotional person!!😇',
  },
  {
    id: 6,
    value: 'I berate myself when I make mistakes'
  },
    {
    id: 7,
    value: 'I dont allow others influence me'
  },
  {
    id: 11,
    value: 'How do you feel today',
  },
  {
    id: 12,
    value: 'Do you love being outdoors',
  },
  {
    id: 13,
    value: 'Do you wanna move a ball',
  },
  {
    id: 14,
    value: 'Cheers🥳, Its Time for Boardgames !',
  },
  {
    id: 15,
    value: 'Hurry🥳, Its Time for Football!!',
  },
];

export const answers: Choice[] = [
  {
    id: 100,
    value: 'I stumble over my words',
  },
  {
    id: 101,
    value: "I'm a fluent speaker",
  },
  {
    id: 102,
    value: 'Agree',
  },
  {
    id: 103,
    value: 'Disagree',
  },
  {
    id: 200,
    value: 'Energetic',
  },
  {
    id: 201,
    value: ' Super Energetic!!',
  },
  {
    id: 202,
    value: ' Yes I love!!',
  },
  {
    id: 203,
    value: ' Not Really!!',
  },
  {
    id: 204,
    value: ' yes Ofcourse!!',
  },
  {
    id: 205,
    value: ' I love to roll a dice!!',
  },
  {
    id: 206,
    value: 'Always'
  },
  {
    id: 207,
    value: 'Never'
  }
];

export const workflow: WorkFlow[] = [
  {
    choiceId: 100,
    evaluateId: 1,
    childEvaluateId: 2,
    surveyId: 1,
  },
  {
    choiceId: 101,
    evaluateId: 1,
    childEvaluateId: 4,
    surveyId: 1,
  },
    {
    choiceId: 102,
    evaluateId: 2,
    childEvaluateId: 6,
    surveyId: 1,
  },
  {
    choiceId: 206,
    evaluateId: 6,
    childEvaluateId: 5,
    surveyId: 1,
  },
  {
    choiceId: 207,
    evaluateId: 6,
    childEvaluateId: 4,
    surveyId: 1,
  },
  {
    choiceId: 102,
    evaluateId: 3,
    childEvaluateId: 4,
    surveyId: 1,
  },
  {
    choiceId: 103,
    evaluateId: 2,
    childEvaluateId: 3,
    surveyId: 1,
  },
  {
    choiceId: 103,
    evaluateId: 3,
    childEvaluateId: 7,
    surveyId: 1,
  },
  {
    choiceId: 206,
    evaluateId: 7,
    childEvaluateId: 5,
    surveyId: 1,
  },
  {
    choiceId: 207,
    evaluateId: 7,
    childEvaluateId: 4,
    surveyId: 1,
  },
  {
      choiceId: 200,
      evaluateId: 11,
      childEvaluateId: 12,
      surveyId: 2
  },
  {
      choiceId: 201,
      evaluateId: 11,
      childEvaluateId: 13,
      surveyId: 2
  },
  {
      choiceId: 202,
      evaluateId: 12,
      childEvaluateId: 15,
      surveyId: 2
  },
  {
      choiceId: 203,
      evaluateId: 12,
      childEvaluateId: 14,
      surveyId: 2
  },
  {
      choiceId: 204,
      evaluateId: 13,
      childEvaluateId: 15,
      surveyId: 2
  },
  {
      choiceId: 205,
      evaluateId: 13,
      childEvaluateId: 14,
      surveyId: 2
  }
];
