import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/Task';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {

  constructor() { }

  @Input() task!: Task;
  faTimes = faTimes;

  // Emit the onDelete event to parent tasks component
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()

  onToggle(task: Task): void {
    this.onToggleReminder.emit(task)
  }
  onDelete(task: Task): void {
    this.onDeleteTask.emit(task)
  }

  ngOnInit(): void {
  }

}
