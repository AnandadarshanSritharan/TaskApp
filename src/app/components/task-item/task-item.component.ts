import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { TasksComponent } from '../tasks/tasks.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [TasksComponent,FontAwesomeModule,CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
@Input() task?: Task;
@Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
@Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
faTimes = faTimes;

ngOnInit() {
  console.log("Task received in TaskItemComponent:", this.task); // Check if task is received
}


onDelete(task?: Task) {
  if (task) {
    this.onDeleteTask.emit(task);
  }
}

onToggle(task?: Task) {
  console.log("Double-click event received");
  if (task) {
    console.log("Toggle event emitted with task:", task); 
    this.onToggleReminder.emit(task);
    console.log(task.reminder);
  }
}


}

