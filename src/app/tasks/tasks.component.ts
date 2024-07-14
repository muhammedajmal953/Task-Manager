import { Component,Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from "./task/task.component";
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from "./add-task/add-task.component";
import { NewTask } from './add-task/newTaskModel';
import { TaskServices } from './tasks.services.';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, CommonModule, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() name!: string
  @Input() id!: string
  isAdding=false


  constructor(private taskservice:TaskServices) {

  }
  get selectedUserTasks() {
    return this.taskservice.getUserTask(this.id)
  }

  showAddTask() {
     this.isAdding=true
  }

  closeForm() {
    this.isAdding=false
  }
  addTask(newTask:NewTask) {

    this.isAdding=false
  }
}
