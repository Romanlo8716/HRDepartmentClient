import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Department } from "../models/Department";

@Injectable({providedIn: 'root'})
export class DepartmentService{

    constructor(private http : HttpClient) {}

    public getDepartment():Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getDepartments`);
    }

    public getDepartmentById(id:Number):any{
        return this.http.get<Department>(`http://localhost:8080/getDepartmentById` + `/id=` + id);
    }

}