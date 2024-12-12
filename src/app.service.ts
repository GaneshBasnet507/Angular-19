import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  callApi(student: any): Observable<any> {
    return this.http.post("http://localhost:9090/api/user/save", student);
  }
  
  callApiShow(student : any): Observable<any>{
    return this.http.get("http://localhost:9090/api/user/retrieve",student);
  }

}
