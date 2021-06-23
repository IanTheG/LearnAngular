import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

// Acts like a global state, child components can subscribe to changes
// and change UI based on value of showAddTask

export class UiService {

  private showAddTask = false
  private subject = new Subject<any>()

  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask
    this.subject.next(this.showAddTask)
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable()
  }
}
