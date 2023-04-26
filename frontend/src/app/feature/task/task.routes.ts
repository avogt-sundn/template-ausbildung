import { TaskListDashboardComponent } from './page/task-list-dashboard/task-list-dashboard.component';
import { Routes } from '@angular/router';
import { TaskListComponent } from './page/task-list/task-list.component';

export const taskRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  { path: 'dashboard', component: TaskListDashboardComponent },
  { path: ':id', component: TaskListComponent },
];
