import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Subscription } from 'rxjs'
import { Task } from 'src/app/models/Task'
import { UiService } from '../../services/ui.service'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})

export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()

  // Include var declarations for input fields with correct types
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription = new Subscription();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((val) => this.showAddTask = val)
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task')
      return
    }

    // Create a new object and emit it to the service
    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    }

    this.text = ''
    this.day = ''
    this.reminder = false

    this.onAddTask.emit(newTask)
  }

  ngOnInit(): void {
  }

}
