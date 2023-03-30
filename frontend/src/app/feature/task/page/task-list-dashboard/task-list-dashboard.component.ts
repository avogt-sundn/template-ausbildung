import { TasksComponent } from './../../component/tasks/tasks.component';
import { MatButtonModule } from '@angular/material/button';
import { TaskListService } from './../../service/task-list.service';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'tod-task-list-dashboard',
  standalone: true,
  templateUrl: './task-list-dashboard.component.html',
  styleUrls: ['./task-list-dashboard.component.scss'],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterLink,
    TasksComponent,
  ],
})
export class TaskListDashboardComponent {
  taskLists$ = inject(TaskListService).getTaskLists();
}
