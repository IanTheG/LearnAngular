import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})

export class TasksComponent implements OnInit {

  // To use a service in a class, include it in the constructor
  constructor(private taskService: TaskService) { }

  // Creates a "local state"
  tasks: Task[] = [];

  // Receives task to CRUD from task-item's emitted onDeleteTask function,
  // which calls this function in the html
  toggleReminder(task: Task): void {
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe()
  }

  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task))
  }

  deleteTask(task: Task): void {
    this.taskService
      .deleteTask(task)
      .subscribe(() => (
        this.tasks = this.tasks.filter((t) => t.id !== task.id))
      )
  }

  ngOnInit(): void {
    // Works for synchronous data
    // this.tasks = this.taskService.getTasks()

    // Subscribe to tasks for asynchronous data, loads all tasks on init
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
  }

}
