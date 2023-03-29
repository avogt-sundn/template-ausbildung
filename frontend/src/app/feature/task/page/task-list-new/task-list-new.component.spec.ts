import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListNewComponent } from './task-list-new.component';

describe('TaskListNewComponent', () => {
  let component: TaskListNewComponent;
  let fixture: ComponentFixture<TaskListNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TaskListNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
