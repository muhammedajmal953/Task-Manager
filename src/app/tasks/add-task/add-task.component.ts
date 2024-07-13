import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './newTaskModel';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() hideForm = new EventEmitter();
  @Output() add = new EventEmitter<NewTask>()
  enteredTitle = ''
  enteredSummery = ''
  enteredDate = ''


  hide() {
    return this.hideForm.emit();
  }

  formSubmit() {
    this.add.emit({
      title:this.enteredTitle,
      summary: this.enteredSummery,
      date:this.enteredDate
    })
  }
}
