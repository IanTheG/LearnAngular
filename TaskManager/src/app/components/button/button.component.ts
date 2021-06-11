import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  // Define props for inputting data, ? optional, ! required
  @Input() text?: string;
  @Input() color?: string;

  // Define data that component emits to parent
  @Output() btnClick = new EventEmitter();

  ngOnInit(): void {
  }

  // Define custom functions to use in component
  onClick(): void {
    this.btnClick.emit();
  }
}
