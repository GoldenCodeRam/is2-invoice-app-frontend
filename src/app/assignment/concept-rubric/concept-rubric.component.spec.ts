import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptRubricComponent } from './concept-rubric.component';

describe('ConceptRubricComponent', () => {
  let component: ConceptRubricComponent;
  let fixture: ComponentFixture<ConceptRubricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceptRubricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceptRubricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
