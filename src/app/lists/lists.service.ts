import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from '../lists/user.model';
@Injectable({
    providedIn:'root'
})
export class UserService{
    private url = 'http://localhost:9090/api/userDetails/getUserList';
    private apiUrl = 'http://localhost:9090/api/userDetails/search';
    constructor(private http:HttpClient){}
    getUsers():Observable<User[]>{
        return this.http.get<User[]>(this.url);
    }
    callApiDelete(email: string):Observable<any>{
        return this.http.delete(`http://localhost:9090/api/userDetails/delete?email=${email}`,{ withCredentials: true });
      }
      callApiUpdate(user: any):Observable<any>{
        return this.http.put(`http://localhost:9090/api/userDetails/update`,user,{ withCredentials: true });
      }
      CallApiSearch(user:any):Observable<any>{
        return this.http.post(`http://localhost:9090/api/userDetails/search`,user);
      }
      searchUsers(username: string): Observable<any> {
        // Assuming the backend expects a query parameter for the search
        return this.http.get<any>(`${this.apiUrl}?username=${username}`);
      }
      callApiUpload(formData: FormData):Observable<any>{
        return this.http.post<any>('http://localhost:9090/api/upload/uploadFile',formData);
      }
     
     
}
