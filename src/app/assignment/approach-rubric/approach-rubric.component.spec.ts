import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproachRubricComponent } from './approach-rubric.component';

describe('ApproachRubricComponent', () => {
  let component: ApproachRubricComponent;
  let fixture: ComponentFixture<ApproachRubricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproachRubricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproachRubricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
