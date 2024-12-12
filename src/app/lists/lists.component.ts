import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from './user.model';
import { UserService } from './lists.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-lists',
  imports: [ CommonModule,FormsModule],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent{
  users: User[] = []; 
  constructor(private userService: UserService) {}
  ngOnInit():void{
    this.userService.getUsers().subscribe(
      (data:User[])=>{
        this.users=data;
      },
      error => {
        console.error('Error occur',error);
      }

    );
  }
  


}
