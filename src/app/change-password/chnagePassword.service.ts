import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  callApi(user: any): Observable<any> {
    return this.http.post("http://localhost:9090/api/userDetails/changePassword", user);
  }
 
}