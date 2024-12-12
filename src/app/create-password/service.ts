import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable} from "rxjs";
@Injectable(
    {
         providedIn: 'root'
    })
export class PasswordComponent{
    private baseUrl = "http://localhost:9090/api/userDetails/updatePassword";
    constructor(private http:HttpClient){}
    callApi(user:any):Observable<any>{
        console.log("api called");
        return this.http.post(this.baseUrl,user);
    }
}