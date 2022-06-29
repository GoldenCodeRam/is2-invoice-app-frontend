import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemRubricComponent } from './problem-rubric.component';

describe('ProblemRubricComponent', () => {
  let component: ProblemRubricComponent;
  let fixture: ComponentFixture<ProblemRubricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemRubricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemRubricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
