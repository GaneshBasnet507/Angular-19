import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotService {
    private baseUrl = "http://localhost:9090/api/userDetails/generateCode";

  constructor(private http: HttpClient) { }
  callApi(email: string): Observable<any> {
    console.log('Calling API with data:');
    const params = new HttpParams().set('email',email)
    return this.http.post(this.baseUrl, {}, { params });
  }
}
