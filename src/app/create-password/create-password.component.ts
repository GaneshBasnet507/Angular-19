import { Component } from '@angular/core';
import { PasswordComponent } from './service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-password',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './create-password.component.html',
  styleUrl: './create-password.component.css'
})
export class CreatePasswordComponent {

  user ={email:'',code:'',newPassword:''};
  constructor(private passwordComponent:PasswordComponent){}
  onSubmit(form: NgForm): void{
    this.passwordComponent.callApi(this.user).subscribe(
      _response => {
        alert('successfully Reset your password');
      },
      error => {
        if (error.status === 200) {
          alert('successfully Reset your password');
        } else {
          alert('Error while registering: ' + error.message);
        }
      }
    );
  }

}
