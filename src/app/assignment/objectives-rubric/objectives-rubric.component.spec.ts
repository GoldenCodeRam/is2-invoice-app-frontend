import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectivesRubricComponent } from './objectives-rubric.component';

describe('ObjectivesRubricComponent', () => {
  let component: ObjectivesRubricComponent;
  let fixture: ComponentFixture<ObjectivesRubricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectivesRubricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectivesRubricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
