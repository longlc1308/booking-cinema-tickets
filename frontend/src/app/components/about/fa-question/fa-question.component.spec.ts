import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaQuestionComponent } from './fa-question.component';

describe('FaQuestionComponent', () => {
  let component: FaQuestionComponent;
  let fixture: ComponentFixture<FaQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
