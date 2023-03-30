import { Task, TaskList } from './../task/task.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  constructor() {}

  getTaskLists(): Observable<TaskList[]> {
    return of([
      {
        id: '1',
        name: 'liste 1',
        tasks: [
          {
            id: '11',
            done: false,
            description: 'Das muss ich tun',
          },
          {
            id: '12',
            done: false,
            description: 'Das muss ich auch tun',
          },
          {
            id: '13',
            done: false,
            description: 'Das muss ich erst recht tun',
          },
        ],
      },
      {
        id: '1',
        name: 'liste 2',
        tasks: [
          {
            id: '21',
            done: false,
            description: 'Das muss ich tun!',
          },
          {
            id: '22',
            done: false,
            description: 'Das muss ich auch tun!',
          },
          {
            id: '23',
            done: false,
            description: 'Das muss ich erst recht tun!',
          },
        ],
      },
      {
        id: '3',
        name: 'liste 3',
        tasks: [
          {
            id: '31',
            done: false,
            description: 'Das muss ich tun!!',
          },
          {
            id: '32',
            done: false,
            description: 'Das muss ich auch tun!!',
          },
          {
            id: '33',
            done: false,
            description: 'Das muss ich erst recht tun!!',
          },
        ],
      },
    ]);
  }

  getTaskList(): Observable<TaskList> {
    return of();
  }

  addTaskList(): Observable<void> {
    return of();
  }

  addTask(): Observable<Task> {
    return of();
  }

  putTask(): Observable<Task> {
    return of();
  }

  deleteTask(): Observable<Task> {
    return of();
  }
}
