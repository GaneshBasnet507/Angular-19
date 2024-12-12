import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ForgotService } from './password.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  imports: [FormsModule,CommonModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  user = {email:''};
  constructor(private forgotService:ForgotService, private router:Router){}
  onSubmit(form: NgForm): void{
    this.forgotService.callApi(this.user.email).subscribe(
      (response) => {
  
        alert('');
      
      },
      (error) => {
        if (error.status === 200) { 
          alert('we send code');
          this.router.navigate(['/create-password']);
        }
        else{
        alert('Error occurs :');
        }
      }
    );


  }

}

