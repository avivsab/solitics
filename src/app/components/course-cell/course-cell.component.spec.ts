import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCellComponent } from './course-cell.component';

describe('CourseCellComponent', () => {
  let component: CourseCellComponent;
  let fixture: ComponentFixture<CourseCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
