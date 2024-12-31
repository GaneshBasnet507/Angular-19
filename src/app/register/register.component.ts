import { Component } from '@angular/core';
import { UserService  } from './register.service';
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
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  user = { fullName: '',email:'',password:'',userName:'',phoneNo:'',address: '',role:''};
  passwordFieldType: string = 'password';
 constructor(private appService: UserService ,private router:Router)  {}

  onSubmit(form: NgForm): void{
    this.appService.callApi(this.user).subscribe(
      (response) => {
  
        // alert('user successfully login');
      
      },
      (error) => {
        if (error.status === 200) { 
           alert('user successfully Register');
          
        
        }
        else{
        alert('Error while Register :');
        }
      }
    );
  }
 
}
  