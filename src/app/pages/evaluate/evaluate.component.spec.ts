import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { EvaluateComponent } from './evaluate.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';

describe('EvaluateComponent', () => {
  let component: EvaluateComponent;
  let fixture: ComponentFixture<EvaluateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluateComponent, CommonModule],
      providers: [{provide: ActivatedRoute, useValue: {snapshot: {
          params: {id: "1"}}
        }
      }]
    })
    .compileComponents();
    fixture = TestBed.createComponent(EvaluateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create Evaluate Component', () => {
    expect(component).toBeTruthy();
  });

  it('Should load the first survey question reading the survey number from route param', () => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let debugElement: DebugElement = fixture.debugElement;
      let parentDiv: HTMLElement = debugElement.nativeElement.querySelector("#parent");
      expect(parentDiv).toBeTruthy();
      let queDiv: HTMLElement = debugElement.nativeElement.querySelector("#question");
      expect(queDiv.innerText).toEqual("How do you see yourself ?");
      let choiceContainer: HTMLElement = debugElement.nativeElement.querySelector("#choiceContainer");
      expect(choiceContainer.childNodes.length).toEqual(3);
      let choiceButton: HTMLButtonElement = debugElement.nativeElement.querySelector("#choice_0");
      expect(choiceButton).toBeTruthy();
      expect(choiceButton.innerText).toEqual("I stumble over my words");
      choiceButton = debugElement.nativeElement.querySelector("#choice_1");
      expect(choiceButton).toBeTruthy();
      expect(choiceButton.innerText).toEqual("I'm a fluent speaker");
    });
  });

  it('On choosing an option, the handler function should be called', fakeAsync(() => {
      fixture.detectChanges();
      let debugElement: DebugElement = fixture.debugElement;      
      let choiceButton: HTMLButtonElement = debugElement.nativeElement.querySelector("#choice_0");
      expect(choiceButton).toBeTruthy();
      spyOn(component, 'onChoose');
      choiceButton.click();
      tick();
      expect(component.onChoose).toHaveBeenCalled();
  }));
});
