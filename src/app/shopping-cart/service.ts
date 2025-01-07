import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
    providedIn:'root'
})
export class CartService{
    
    constructor(private http:HttpClient){}
    callApi(book: { title: string }): Observable<any> {
      console.log('Calling API with data:', book);
      return this.http.post("http://localhost:9090/shoppingCart/add-book", book, { 
        withCredentials: true, 
        headers: { 'Content-Type': 'application/json' } // Ensure JSON content type
      });
    }
    // getBooks():Observable<Book[]>{
    //           return this.http.get<Book[]>(this.url);
    //       }
    //  callApiUpdate(Book: any):Observable<any>{
    //         return this.http.post(`http://localhost:9090/books/update`,Book,{ withCredentials: true });
    //       }
    // callApiDelete(id:number):Observable<any>{
    //     return this.http.delete(`http://localhost:9090/books/delete?id=${id}`,{ withCredentials: true });
    //   }
    // searchBooks(identifier: string): Observable<any> {
    //     return this.http.get<any>(`${this.apiUrl}?identifier=${identifier}`);
    //   }
    }
    //   callApiUpload(formData: FormData):Observable<any>{
    //     return this.http.post<any>('http://localhost:9090/api/upload/uploadFile',formData);
    //   }
  