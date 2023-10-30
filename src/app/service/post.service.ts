import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class PostService{

    constructor(private http : HttpClient) {}

    public getPost():Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getPosts`);
    }

}