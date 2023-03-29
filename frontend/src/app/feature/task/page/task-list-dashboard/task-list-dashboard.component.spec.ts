import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListDashboardComponent } from './task-list-dashboard.component';

describe('TaskListDashboardComponent', () => {
  let component: TaskListDashboardComponent;
  let fixture: ComponentFixture<TaskListDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TaskListDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
