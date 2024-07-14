import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './newTaskModel';
import { TaskServices } from '../tasks.services.';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Input() userId!:string
  @Output() hideForm = new EventEmitter();
  @Output() add = new EventEmitter<NewTask>()
  enteredTitle = ''
  enteredSummery = ''
  enteredDate = ''
   private taskService=inject(TaskServices)


  hide() {
    return this.hideForm.emit();
  }

  formSubmit() {
    this.taskService.addTask({
      title:this.enteredTitle,
      summary: this.enteredSummery,
      date:this.enteredDate
    }, this.userId)

    this.hideForm.emit()
  }
}
