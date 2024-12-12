import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ForgotService } from './forgot.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-username',
  imports: [FormsModule,CommonModule],
  templateUrl: './forgot-username.component.html',
  styleUrl: './forgot-username.component.css'
})
export class ForgotUsernameComponent {
  user = {email:''};
  constructor(private forgotService:ForgotService,private router:Router ){}
  onSubmit(form: NgForm): void{
    this.forgotService.callApi(this.user.email).subscribe(
      (response) => {
  
        alert('');
      
      },
      (error) => {
        if (error.status === 200) { 
          alert('we send code');
          this.router.navigate(['/create-username']);
        }
        else{
        alert('Error occurs :');
        }
      }
    );


  }

}
