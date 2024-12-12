import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { response } from 'express';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GaneshAngular_demo';
  student = { firstName: '', address: '',phoneNo: '',email:''};
  submitted = false;
  constructor(private appService: AppService) {
    console.log("hey")
  }
  onSubmit(): void {
    console.log("onsubmit called");
    console.log("student info", this.student);
    console.log(this.student.firstName);
    this.submitted = true;
    
   
    this.appService.callApi(this.student).subscribe(
      (response) => {
        console.log('Student data submitted successfully:', response);
      },
      (error) => {
        console.error('Error while submitting student data:', error);
      }
    );
  }
  onShow(): void{
    this.appService. callApiShow(this.student).subscribe(
      (response) =>{
        console.log('Data retrieve successfully',response)
      },
      (error) => {
        console.error('error while retrieving data',error);
      }
    )
  }
}

