import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class DepartmentsAndPostsOfWorkerService{

    constructor(private http : HttpClient) {}

    public getDepartmentsAndPostsOfWorker():Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getDepartmentsAndPostsOfWorker`);
    }

    public getGroupByDepartmentDepartmentsAndPostsOfWorker():Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getGroupByDepartmentDepartmentsAndPostsOfWorker`);
    }

    public getDepartmentsAndPostsOfWorkerByDepartmentId(id:string|null):Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getDepartmentsAndPostsOfWorkerByDepartmentId/` + id);
    }

    
    

}