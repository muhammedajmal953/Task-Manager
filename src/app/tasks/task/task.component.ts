import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './taskModel';
import { CardComponent } from "../../ui/card/card.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: Task
  @Output() complete = new EventEmitter<string>()


  onComplete() {
    this.complete.emit(this.task.id)
  }
}
