import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from '../lists/user.model';
@Injectable({
    providedIn:'root'
})
export class UserService{
    private url = 'http://localhost:9090/api/userDetails/getUserList';
    constructor(private http:HttpClient){}
    getUsers():Observable<User[]>{
        return this.http.get<User[]>(this.url);
    }
}
