import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryComponent } from './summary.component';
import { ActivatedRoute } from '@angular/router';
import { DebugElement } from '@angular/core';

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryComponent],
      providers: [{provide: ActivatedRoute, useValue: {snapshot: {
                params: {id: "1"}}
            }
        }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    component.service.flowCache.set(1, [1, 2]);
    let map: Map<number, number> = new Map();
    map.set(1, 100);    
    component.service.selectionCache.set(1, map);
    fixture.detectChanges();
  });

  it('Should create Summary Component', () => {
    expect(component).toBeTruthy();
  });

  it("Summary component should load the content from the service cache.", () => {
    fixture.whenStable().then(() => {
        fixture.detectChanges();
        let debugElement: DebugElement = fixture.debugElement;
        expect(debugElement.nativeElement).toBeTruthy();
        let targetDiv: HTMLElement = debugElement.nativeElement.querySelector("#resultQue");
        expect(targetDiv.innerText).toEqual("How do you see yourself ?");
        targetDiv = debugElement.nativeElement.querySelector("#resultAns");
        expect(targetDiv.innerText).toEqual("I stumble over my words");
    });
  });
});
