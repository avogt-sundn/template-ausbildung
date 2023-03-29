import { taskRoutes } from './feature/task/task.routes';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'tasklist',
    pathMatch: 'full',
  },
  {
    path: 'tasklist',
    children: taskRoutes,
  }
];

