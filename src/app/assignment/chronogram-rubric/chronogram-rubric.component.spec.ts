import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronogramRubricComponent } from './chronogram-rubric.component';

describe('ChronogramRubricComponent', () => {
  let component: ChronogramRubricComponent;
  let fixture: ComponentFixture<ChronogramRubricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChronogramRubricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChronogramRubricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
