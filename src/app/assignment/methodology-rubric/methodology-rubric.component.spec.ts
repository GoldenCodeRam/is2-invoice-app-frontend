import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodologyRubricComponent } from './methodology-rubric.component';

describe('MethodologyRubricComponent', () => {
  let component: MethodologyRubricComponent;
  let fixture: ComponentFixture<MethodologyRubricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MethodologyRubricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MethodologyRubricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
