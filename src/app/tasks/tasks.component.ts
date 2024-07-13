import { Component,Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from "./task/task.component";
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from "./add-task/add-task.component";
import { NewTask } from './add-task/newTaskModel';

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

  get selectedUserTasks() {
    
  }

  onCompleteTask(taskId:string) {
    this.dummyTasks=this.dummyTasks.filter(task=>task.id!==taskId)
  }

  showAddTask() {
     this.isAdding=true
  }

  closeForm() {
    this.isAdding=false
  }
  addTask(newTask:NewTask) {
    this.dummyTasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.id,
      title: newTask.title,
      summary: newTask.summary,
      dueDate:newTask.date
    })

    this.isAdding=false
  }
}
