import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from './user.model';
import { UserService } from './lists.service';
import { FormsModule, NgForm } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import * as XLSX from 'xlsx'
import { ViewEncapsulation } from '@angular/core';
import { EMPTY } from 'rxjs';
import { response } from 'express';



@Component({
  selector: 'app-lists',
  imports: [ CommonModule,FormsModule,NgxPaginationModule],
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],


})
export class ListsComponent{
  searchQuery = '';  // For storing the search input
  p: number = 1;
  count:number = 3;
  users: User[] = []; 
  searchUsers :any[] = []; 
  onSearchTableShow: boolean = false;
  selectedUser: User | null = null;
  sortDirection: string = ''; 
  selectedFile: File | null = null;

  sortByUserName() {
    if (this.sortDirection === 'asc') {
      this.users.sort((a, b) => (a.userName > b.userName ? -1 : 1));
      this.sortDirection = 'desc';
    } else {
      this.users.sort((a, b) => (a.userName < b.userName ? -1 : 1));
      this.sortDirection = 'asc';
    }
  }
  constructor(private userService: UserService) {}
  onDownload(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
  
    if (selectedValue === 'csv') {
      this.downloadCSV();
    } else if (selectedValue === 'xls') {
      this.downloadXls();
    }
  }
  ngOnInit():void{
    this.userService.getUsers().subscribe(
      (data:User[])=>{
        this.users=data;
      },
      error => {
        console.error('Error occur',error);
      }

    );
  }
  downloadXls():void{
    const header = ['ID', 'Full Name', 'Address', 'Email', 'Phone No', 'User Name'];
    const rows = this.users.map(user => [
      user.id,
      user.fullName,
      user.address,
      user.email,
      user.phoneNo,
      user.userName
    ]);
    const xlsContent = [header, ...rows];
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(xlsContent);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Users');
     XLSX.writeFile(wb, 'users.xlsx');

  }
   // Method to download users as CSV
   downloadCSV(): void {
    const header = ['ID', 'Full Name', 'Address', 'Email', 'Phone No', 'User Name'];
    const rows = this.users.map(user => [
      user.id,
      user.fullName,
      user.address,
      user.email,
      user.phoneNo,
      user.userName
    ]);
    // Create CSV content
    const csvContent = this.convertToCSV([header, rows]);

    // Create a Blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'users.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
    // Method to convert an array of arrays to CSV format
    convertToCSV(data: any[]): string {
      return data.map(row => row.join(',')).join('\n');
    }
    //for file selected 
    onFileSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input?.files?.length) {
        this.selectedFile = input.files[0];
      }
    }
    onUpload():void{
      if (this.selectedFile) {
        const formData = new FormData();
        formData.append('file', this.selectedFile);
  
      this. userService.callApiUpload(formData).subscribe(
        (response) => {alert('Successfully uploaded')

        },

      (error)=>{
        if(error.status == 200){
          alert('Successfully uploaded');

        }else{
          alert('Error while uploading users: ' + error.error.message); 
        }
      }
      ); 
    } 
  }
    onSearch() {
      if (this.searchQuery.trim()) {
        this.userService.searchUsers(this.searchQuery).subscribe(
          (data) => {
            if (data ) {
              this.users= [data]; 
              this.onSearchTableShow = true;  
            } else {
              this.users= [];
              this.onSearchTableShow = false; 
              alert("User not found");
            }
          },
          (error) => {
            console.error('Error fetching user data', error.getMessage());
            alert('An error occurred while searching');
          }
        );
      }
      else {
        this.userService.getUsers().subscribe(
          (data:User[])=>{
            this.users=data;
          },
          error => {
            console.error('Error occur',error);
          }
    
        );
      }
    }
  
  onDelete(email:string):void{
      this.userService.callApiDelete(email).subscribe(
        (response) => { alert('User successfully deleted');
  
         }, 
         (error) => 
          { 
            if(error.status === 200){
              alert('user delete successfully');
  
            }
            if (error.status === 401) {
              alert('Error while login: ' + error.error);  
            } 
          } 
        ); 
      }
          onUpdate(form: NgForm): void {
            if (this.selectedUser) {
              this.userService.callApiUpdate(this.selectedUser).subscribe(
                (response) => {
                  alert('User successfully updated');
                },
                (error) => {
                  if (error.status === 200) {
                    alert('User successfully updated');
                  } else {
                    alert('Error while updating user: ' + error.error.message);
                  }
                }
              );
            }
          }
          
    
  }
    
  



