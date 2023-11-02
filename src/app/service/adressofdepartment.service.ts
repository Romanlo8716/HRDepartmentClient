import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { AdressofdepartmentPageComponent } from "../adressofdepartment-page/adressofdepartment-page.component";
import { AdressOfDepartment } from "../models/AdressOfDepartment";

@Injectable({providedIn: 'root'})
export class AdressOfDepartmentService{

    constructor(private router:Router, private http : HttpClient) {}


    public getAdressOfDepartment():Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getAdressOfDepartments`);
    }

    public getAdressOfDepartmentById(id:String|null):any{
        return this.http.get<AdressOfDepartment>(`http://localhost:8080/getAdressOfDepartmentById/`+ id);
    }

    public createAdressOfDepartment(formData:any):any{
        return  this.http.post('http://localhost:8080/createAdressOfDepartments', formData).subscribe(
            (response) => {
                console.log('Успешно отправлено!', response);
                this.router.navigate(['/adressofdepartment-page']);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }

    public deleteAdressOfDepartment(id:String|null):any{
        return  this.http.delete('http://localhost:8080/deleteAdressOfDepartment/' + id).subscribe(
            (response) => {
                console.log('Успешно удалено!', response);
                this.router.navigate(['/adressofdepartment-page']);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }
}