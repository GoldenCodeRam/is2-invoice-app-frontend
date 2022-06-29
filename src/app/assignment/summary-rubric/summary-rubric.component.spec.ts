import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryRubricComponent } from './summary-rubric.component';

describe('SummaryRubricComponent', () => {
  let component: SummaryRubricComponent;
  let fixture: ComponentFixture<SummaryRubricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryRubricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryRubricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
