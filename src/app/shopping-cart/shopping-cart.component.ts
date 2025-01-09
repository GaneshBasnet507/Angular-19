import { Component } from '@angular/core';
import { CartService } from './service';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Cart } from './cart.model';

@Component({
  selector: 'app-shopping-cart',
  imports: [FormsModule,CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
    Book = {title:''};
    carts: Cart[] = []; 
    showAddBookForm: boolean = false;
   
     constructor(private cartService: CartService) {}
      ngOnInit():void{
         this. cartService.getCarts().subscribe(
           (data:Cart[])=>{
             this.carts=data;
             console.log(this.carts);
        
           },
           error => {
             console.error('Error occur',error);
           }
     
         );
       }
       onRemove(title:string):void{
        this.cartService.callApiRemoveCart(title).subscribe(
          (response) => { alert('User successfully Remove cart');
    
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
    toggleAddBookForm() {
      console.log('Toggling form visibility');
      this.showAddBookForm = true;
    }
    onAddBook(form: NgForm): void {
      const bookData = { title: this.Book.title }; // Wrap title in an object
      this.cartService.callApi(bookData).subscribe(
        (response) => {
          alert('Book added successfully');
        },
        (error) => {
          if (error.status === 200) {
            alert('Book added successfully');
          } else {
            alert('Error while adding book: ' + error.message);
          }
        }
      );
    }
    
    
    // onDelete(id:number):void{
    //   if(confirm('Are you sure you want delete book')){
    //   this.bookService.callApiDelete(id).subscribe(
    //     (response) => { alert('Book successfully deleted');
  
    //      }, 
    //      (error) => 
    //       { 
    //         if(error.status === 200){
    //           alert('Book deleted successfully');
  
    //         }
    //         if (error.status === 401) {
    //           alert('Error while login: ' + error.error);  
    //         } 
    //       } 
    //     ); 
    //   }
    // }

}
