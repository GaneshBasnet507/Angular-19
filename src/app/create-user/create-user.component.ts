import { Component,ViewEncapsulation } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { routes } from '../app.routes';
import { Router } from '@angular/router';
import { error } from 'console';
import { response } from 'express';
import { UserService } from './service';
@Component({
  selector: 'app-create-user',
  imports: [FormsModule,CommonModule],
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {

   user = { password:'',userName:'',role:''};
    passwordFieldType: string = 'password';
   constructor(private userService: UserService ,private router:Router)  {}
  
    onSubmit(form: NgForm): void{
      this.userService.callApi(this.user).subscribe(
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
