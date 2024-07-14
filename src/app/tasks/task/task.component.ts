import { Component,  inject, Input, } from '@angular/core';
import { Task } from './taskModel';
import { CardComponent } from "../../ui/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskServices } from '../tasks.services.';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: Task


  private taskService=inject(TaskServices)

  onComplete() {
    this.taskService.taskCompleted(this.task.id)
  }
}
