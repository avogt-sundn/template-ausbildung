import { Task, TaskList } from '../model/task.model';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  private http = inject(HttpClient);

  api = 'http://localhost:8080/';
  constructor() {}

  getTaskLists(): Observable<TaskList[]> {
    return this.http.get<TaskList[]>(`${this.api}list/all`);
    // return of([
    //   {
    //     id: '1',
    //     name: 'liste 1',
    //     tasks: [
    //       {
    //         id: '11',
    //         done: false,
    //         description: 'Das muss ich tun',
    //       },
    //       {
    //         id: '12',
    //         done: false,
    //         description: 'Das muss ich auch tun',
    //       },
    //       {
    //         id: '13',
    //         done: false,
    //         description: 'Das muss ich erst recht tun',
    //       },
    //     ],
    //   },
    //   {
    //     id: '1',
    //     name: 'liste 2',
    //     tasks: [
    //       {
    //         id: '21',
    //         done: false,
    //         description: 'Das muss ich tun!',
    //       },
    //       {
    //         id: '22',
    //         done: false,
    //         description: 'Das muss ich auch tun!',
    //       },
    //       {
    //         id: '23',
    //         done: false,
    //         description: 'Das muss ich erst recht tun!',
    //       },
    //     ],
    //   },
    //   {
    //     id: '3',
    //     name: 'liste 3',
    //     tasks: [
    //       {
    //         id: '31',
    //         done: false,
    //         description: 'Das muss ich tun!!',
    //       },
    //       {
    //         id: '32',
    //         done: false,
    //         description: 'Das muss ich auch tun!!',
    //       },
    //       {
    //         id: '33',
    //         done: false,
    //         description: 'Das muss ich erst recht tun!!',
    //       },
    //     ],
    //   },
    // ]);
  }

  getTaskList(id: string): Observable<TaskList> {
    return this.http.get<TaskList>(this.api + `list/${id}`);
  }

  addTaskList(name: string): Observable<TaskList> {
    return this.http.post<TaskList>(`${this.api}list`, { name });
  }

  addTask(task: Partial<Task>, taskListId: string): Observable<TaskList> {
    return this.http.post<TaskList>(this.api + `list/${taskListId}/task`, task);
  }

  putTask(task: Partial<Task>): Observable<Task> {
    return this.http.put<Task>(`${this.api}task`, task);
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete<Task>(`${this.api}task/${id}`);
  }
}
