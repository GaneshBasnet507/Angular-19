import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Book } from '../books-details/book.model';
@Injectable({
    providedIn:'root'
})
export class BookService{
    private url = 'http://localhost:9090/books/books';
    private apiUrl = 'http://localhost:9090/books/search';
    constructor(private http:HttpClient){}
    callApi(Book: any): Observable<any> {
        console.log('Calling API with data:', Book);
        return this.http.post("http://localhost:9090/books/add-book", Book,{ withCredentials: true });
      }
    getBooks():Observable<Book[]>{
              return this.http.get<Book[]>(this.url);
          }
     callApiUpdate(Book: any):Observable<any>{
            return this.http.post(`http://localhost:9090/books/update`,Book,{ withCredentials: true });
          }
    callApiDelete(id:number):Observable<any>{
        return this.http.delete(`http://localhost:9090/books/delete?id=${id}`,{ withCredentials: true });
      }
    searchBooks(identifier: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}?identifier=${identifier}`);
      }
    }
    //   callApiUpload(formData: FormData):Observable<any>{
    //     return this.http.post<any>('http://localhost:9090/api/upload/uploadFile',formData);
    //   }
    