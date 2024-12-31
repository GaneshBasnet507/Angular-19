import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  callApi(user: any): Observable<any> {
    console.log('Calling API with data:', user);
    return this.http.post("http://localhost:9090/api/userDetails/create-user", user);
  }
}
