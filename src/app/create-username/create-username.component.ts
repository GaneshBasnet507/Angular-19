import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { UsernameComponent } from './username.service';
import { ReactiveFormsModule } from '@angular/forms';
import {response } from 'express';

@Component({
  selector: 'app-create-username',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-username.component.html',
  styleUrl: './create-username.component.css'
})
export class CreateUsernameComponent {
  user = { email:'',newUsername:'',code:''};
  constructor(private userNameComponent:  UsernameComponent){}
  onSubmit(form: NgForm): void{
    this.userNameComponent.callApi(this.user).subscribe(
      _response => {
        alert('User successfully registered');
      },
      error => {
        if (error.status === 200) {
          alert('User successfully registered');
        } else {
          alert('Error while registering: ' + error.message);
        }
      }
    );
  }


  }



