import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './register.service';
import { debounceTime, switchMap, map } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  user = { fullName: '', userName: '', email: '', password: '', address: '', phoneNo: '' };

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      userName: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(3)]],
      phoneNo: ['', [Validators.required, Validators.pattern('^98[0-9]{8}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(form: NgForm): void {
    this.userService.callApi(this.user).subscribe(
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
