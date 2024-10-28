import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of} from 'rxjs';
import { TaskItemComponent } from '../task-item/task-item.component';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule,TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  constructor(private taskService: TaskService){}

  tasks: Task[] = [];

  ngOnInit(): void{
    this.taskService.getTasks().subscribe((tasks)=>this.tasks = tasks);
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    });
  }
  

}
