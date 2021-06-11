import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  constructor() { }

  @Input() task!: Task;
  faTimes = faTimes;

  ngOnInit(): void {
  }

}
