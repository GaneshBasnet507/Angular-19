import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {



  constructor(private http: HttpClient) { }
  isLoggedIn(): Observable<boolean> {
    return this.http.get<boolean>("http://localhost:9090/api/userDetails/isLoggedIn", { withCredentials: true });
  }

  callApi(user: any): Observable<any> {
    return this.http.post("http://localhost:9090/api/userDetails/login", user,{  observe: 'response', withCredentials: true });
  }
  callApiDelete(email: string):Observable<any>{
    return this.http.delete(`http://localhost:9090/api/userDetails/delete?email=${email}`);
  }
 
}