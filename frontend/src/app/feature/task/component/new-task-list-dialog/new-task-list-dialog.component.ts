import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TaskListService } from '../../service/task-list.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'tod-new-task-list-dialog',
  standalone: true,
  templateUrl: './new-task-list-dialog.component.html',
  styleUrls: ['./new-task-list-dialog.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class NewTaskListDialogComponent {
  private readonly dialogRef = inject(MatDialogRef<NewTaskListDialogComponent>);
  private readonly taskListService = inject(TaskListService);

  form = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.form.valid && this.form.value.name) {
      this.taskListService
        .addTaskList(this.form.value.name)
        .subscribe((taskList) => {
          this.dialogRef.close(taskList.id);
        });
    }
  }
}
