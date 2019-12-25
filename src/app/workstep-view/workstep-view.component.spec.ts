import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkstepViewComponent } from './workstep-view.component';

describe('WorkstepViewComponent', () => {
  let component: WorkstepViewComponent;
  let fixture: ComponentFixture<WorkstepViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkstepViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkstepViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
