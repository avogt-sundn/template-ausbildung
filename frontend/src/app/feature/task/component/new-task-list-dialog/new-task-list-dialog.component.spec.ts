import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskListDialogComponent } from './new-task-list-dialog.component';

describe('NewTaskListModalComponent', () => {
  let component: NewTaskListDialogComponent;
  let fixture: ComponentFixture<NewTaskListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTaskListDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewTaskListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
