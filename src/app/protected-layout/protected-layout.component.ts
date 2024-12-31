import { Component,NgModule,OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { UserService } from './service';
import { User } from '../lists/user.model';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { response } from 'express';
import { Router } from '@angular/router';
import { CreateUserComponent } from '../create-user/create-user.component';
import { ListsComponent } from '../lists/lists.component';




@Component({
  selector: 'app-protected-layout',
  imports: [MatSlideToggleModule, MatIconModule, MatMenuModule, CommonModule, RouterOutlet, RouterLink,ListsComponent],
  templateUrl: './protected-layout.component.html',
  styleUrls: ['./protected-layout.component.css']
})
export class ProtectedLayoutComponent {

    constructor(private userService: UserService,private router:Router) {}

    onLogout():void{
      this.userService.logout().subscribe(
        (response) => {
          alert('Logout successful');
          this.router.navigate(['/']);
        },
        (error) => {
          if(error.status==200){
            alert('Logout successful');
            this.router.navigate(['/']);
          }
          else{
          alert('Error during logout: ' + error.message);
          }
        }
      );
    }
    
}
