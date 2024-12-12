import { Component } from '@angular/core';
import { AppService } from './login.service';
import { FormsModule} from '@angular/forms';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { routes } from '../app.routes';
import { Router } from '@angular/router';
import { error } from 'console';
import { response } from 'express';


@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  user = { fullName: '',email:'',password:'',userName:'',phoneNo:'',identifier: ''};
  passwordFieldType: string = 'password';
 constructor(private appService: AppService ,private router:Router)  {}
 togglePasswordVisibility(): void { this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'; }

  onSubmit(form: NgForm): void{
    this.appService.callApi(this.user).subscribe(
      (response) => {
  
        // alert('user successfully login');
      
      },
      (error) => {
        if (error.status === 200) { 
          // alert('user successfully login');
          this.router.navigate(['/dashboard']);
        }
        else{
        alert('Error while login :');
        }
      }
    );
  }
  onDelete(form:NgForm):void{
    this.appService.callApiDelete(this.user.email).subscribe(
      (response) => { alert('User successfully deleted');

       }, 
       (error) => 
        { 
          if(error.status === 200){
            alert('user delete successfully');

          }
          else
          alert('Error while deleting user: ' + error.error.message); 
        } ); }
  
}
  