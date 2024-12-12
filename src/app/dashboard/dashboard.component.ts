import { Component,NgModule,OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { UserService } from './service';
import { User } from '../lists/user.model';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListsComponent } from '../lists/lists.component';
import { RouterLink } from '@angular/router';
import { SideBarComponent } from "../side-bar/side-bar.component";


@Component({
  selector: 'app-dashboard',
  imports: [MatSlideToggleModule, MatIconModule, MatMenuModule, CommonModule, RouterOutlet, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  implements OnInit{
  users: User[] = []; 
  constructor(private userService: UserService) {}
  ngOnInit(): void {
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
