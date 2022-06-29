import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleRubricComponent } from './title-rubric.component';

describe('TitleRubricComponent', () => {
  let component: TitleRubricComponent;
  let fixture: ComponentFixture<TitleRubricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleRubricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleRubricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
