import { Component } from '@angular/core';
import { AppService } from './chnagePassword.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  imports: [CommonModule,FormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
  user = { oldPassword:'',newPassword:'',identifier: ''};
  passwordFieldType: string = 'password';
 constructor(private appService: AppService ,private router:Router)  {}
 togglePasswordVisibility(): void { this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'; }

  onSubmit(form: NgForm): void{
    this.appService.callApi(this.user).subscribe(
      (response) => {
  
        alert('successfully change your password');
      
      },
      (error) => {
        if (error.status === 200) { 
          alert('successfully change your password');
          this.router.navigate(['/register']);
        }
        else{
        alert('Error while change Password :');
        }
      }
    );
  }
}
