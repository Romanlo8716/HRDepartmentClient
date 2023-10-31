import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class WorkerService{

    constructor(private http : HttpClient) {}

    public getWorker():Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getWorkers`);
    }
}