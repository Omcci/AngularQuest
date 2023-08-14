import { ComponentFixture, TestBed } from '@angular/core/testing';

import DirectivesQuestComponent from './directives-quest.component';

describe('DirectivesQuestComponent', () => {
  let component: DirectivesQuestComponent;
  let fixture: ComponentFixture<DirectivesQuestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesQuestComponent]
    });
    fixture = TestBed.createComponent(DirectivesQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
