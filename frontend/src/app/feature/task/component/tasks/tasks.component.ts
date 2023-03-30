import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { Task } from '../../task/task.model';

@Component({
  selector: 'tod-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  imports: [CommonModule, MatListModule],
})
export class TasksComponent {
  @Input() tasks: Task[] = [];
}
