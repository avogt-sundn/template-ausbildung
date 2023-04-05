import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { Task } from './../../model/task.model';
import { TaskListService } from './../../service/task-list.service';
import { TaskList } from '../../model/task.model';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ActivatedRoute } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tod-task-list',
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
  ],
})
export class TaskListComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly taskListService = inject(TaskListService);

  id = '';
  taskList?: TaskList;
  taskForm = new FormGroup({
    description: new FormControl('', {
      validators: Validators.required,
      nonNullable: true,
    }),
    dueDate: new FormControl('', { nonNullable: true }),
  });

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id') ?? '';
      if (this.id) {
        this.taskListService
          .getTaskList(this.id)
          .subscribe((tasklist) => (this.taskList = tasklist));
      }
    });
  }

  checkTask(task: Task) {
    this.taskListService.putTask({
      id: task.id,
      done: !task.done,
    });
  }

  addTask() {
    if (this.taskForm.value) {
      this.taskListService
        .addTask(this.taskForm.value, this.id)
        .subscribe((taskList) => (this.taskList = taskList));
    }
  }

  delete(id?: string) {
    if (id) {
      this.taskListService.deleteTask(id).subscribe();
    }
  }
}
