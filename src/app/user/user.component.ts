import { Component,Input, Output,EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './userModel';
import { CardComponent } from "../ui/card/card.component";




@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user!: User
  @Input() selected!:boolean
  @Output() select=new EventEmitter()

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  outEvent() {
    this.select.emit(this.user.id)
  }
}
