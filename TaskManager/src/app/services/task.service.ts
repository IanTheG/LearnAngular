import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../models/Task';
// import { TASKS } from '../mock-tasks';

// Objects must defined ABOVE @Injectable

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  // Injects in the app root
  providedIn: 'root'
})

// Define CRUD functionality in a service

export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  // Must add module in constructor args
  constructor(private http: HttpClient) { }

  // Using an observable for asynchronous data
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url, task, httpOptions)
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions)
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }

  // // Using an observable for asynchronous data
  // getTasks(): Observable<Task[]> {
  //   const tasks = of(TASKS)
  //   return tasks
  // }

  // Define a regular function for synchronous data
  // getTasks(): Task[] {
  //   return TASKS
  // }
}
