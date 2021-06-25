import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'
import { UiService } from '../../services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title = 'Task Tracker'
  showAddTask = false
  subscription = new Subscription()
  
  // Use a service in a component by including it in the constructor
  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((val) => this.showAddTask = val)
    this.router.url
  }

  ngOnInit(): void {
  }

  toggleAddTask(): void {
    this.uiService.toggleAddTask()
  }

  hasRoute(route: string): boolean {
    return this.router.url == route
  }
}
