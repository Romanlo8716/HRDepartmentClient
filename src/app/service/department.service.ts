import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Department } from "../models/Department";
import { Router } from "@angular/router";

@Injectable({providedIn: 'root'})
export class DepartmentService{

    constructor(private router:Router, private http : HttpClient) {}

    public getDepartment():Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getDepartments`);
    }

    public getDepartmentById(id:Number):any{
        return this.http.get<Department>(`http://localhost:8080/getDepartmentById` + `/id=` + id);
    }

    public createDepartment(formData:any):any{
        return  this.http.post('http://localhost:8080/createDepartments', formData).subscribe(
            (response) => {
                console.log('Успешно отправлено!', response);
                this.router.navigate(['/department-page']);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }

}