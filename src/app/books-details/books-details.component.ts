import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from './book.model';
import { BookService } from './books-details.service';
import { FormsModule, NgForm } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
@Component({
  selector: 'app-books-details',
  imports: [CommonModule,FormsModule,NgxPaginationModule],
  templateUrl: './books-details.component.html',
  styleUrl: './books-details.component.css'
})
export class BooksDetailsComponent {
  sortDirection: string = ''; 
  searchQuery = '';  
    books: Book[] = []; 
    selectedBook: Book | null = null;
    onSearchTableShow: boolean = false;
  showAddBookForm: boolean = false;
  Book = {id:'', author: '',title:'',price:'',quantity:'',genre:''};
   // Toggle form visibility
   toggleAddBookForm() {
    console.log('Toggling form visibility');
    this.showAddBookForm = true;
  }
   constructor(private bookService: BookService) {}
   ngOnInit():void{
    this.bookService.getBooks().subscribe(
      (data:Book[])=>{
        this.books=data;
        this.onSearchTableShow = true;
      },
      error => {
        console.error('Error occur',error);
      }

    );
  }
   onAddBook(form: NgForm): void{
    this.bookService.callApi(this.Book).subscribe(
      (response) => {

    
      },
      (error) => {
        if (error.status === 200) { 
           alert('Book added successfully');
          
        
        }
        else{
        alert('Error while added book :');
        }
      }
    );
    this.resetForm();
      this.showAddBookForm = false;
  }
  onSearch() {
    if (this.searchQuery.trim()) {
      this.bookService.searchBooks(this.searchQuery).subscribe(
        (data) => {
          if (data && data.length) { 
            this.books = data; 
            this.onSearchTableShow = true; 
          } else {
            this.books = [];
            this.onSearchTableShow = false; 
            alert("User not found"); 
          }
        },
        (error) => {
          console.error('Error fetching user data', error.message || error);
          alert('An error occurred while searching');
        }
      );
    } else {
      this.bookService.getBooks().subscribe(
        (data: Book[]) => {
          this.books = data;
          this.onSearchTableShow = true;
        },
        (error) => {
          console.error('Error fetching books', error.message || error);
        }
      );
    }
  }
  
    
  onUpdate(form: NgForm): void {
    if (this.selectedBook) {
      this.bookService.callApiUpdate(this.selectedBook).subscribe(
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
  onDelete(id:number):void{
    if(confirm('Are you sure you want delete book')){
    this.bookService.callApiDelete(id).subscribe(
      (response) => { alert('Book successfully deleted');

       }, 
       (error) => 
        { 
          if(error.status === 200){
            alert('Book deleted successfully');

          }
          if (error.status === 401) {
            alert('Error while login: ' + error.error);  
          } 
        } 
      ); 
    }
  }
  
  resetForm() {
    this.Book = {
      id:'',
      title: '',
      author: '',
      genre: '',
      price: '',
      quantity: ''
    };
  }
}
  //  ngOnInit():void{
  //     this.bookService.getUsers().subscribe(
  //       (data:User[])=>{
  //         this.users=data;
  //       },
  //       error => {
  //         console.error('Error occur',error);
  //       }
  
  //     );
  //   }
  // sortByBookName() {
  //   if (this.sortDirection === 'asc') {
  //     this.users.sort((a, b) => (a.userName > b.userName ? -1 : 1));
  //     this.sortDirection = 'desc';
  //   } else {
  //     this.users.sort((a, b) => (a.userName < b.userName ? -1 : 1));
  //     this.sortDirection = 'asc';
  //   }
  // }
  

