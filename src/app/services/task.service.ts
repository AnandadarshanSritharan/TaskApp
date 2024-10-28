import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
}
  deleteTask(task : Task) : Observable <Task>{
    const url = `${this.apiUrl}/${task.id}`;
    console.log(url);
    return this.http.delete<Task>(url);
  }
}
