import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Department } from "../models/Department";
import { Router } from "@angular/router";
import { PostOfDepartment } from "../models/PostOfDepartment";

@Injectable({providedIn: 'root'})
export class DepartmentService{

    constructor(private router:Router, private http : HttpClient) {}

    public getDepartment():Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getDepartments`);
    }

    

    public getPostOfDepartment():Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getPostOfDepartment`);
    }

    public getPostOfDepartmentByDepartmentId(departmentId:String|null):Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getPostOfDepartmentByDepartmentId/` + departmentId);
    }

    public getPostOfDepartmentById(id:String|null):any{
        return this.http.get<PostOfDepartment>(`http://localhost:8080/getPostOfDepartmentById/` + id);
    }

    public getDepartmentById(id:String|null):any{
        return this.http.get<Department>(`http://localhost:8080/getDepartmentById/`+ id);
    }

    public getWorkerOnDepartmentByDepartmentId(id:String|null):Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getWorkerOnDepartmentByDepartmentId/` + id);
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

    public deleteDepartment(id:String|null):any{
        return  this.http.delete('http://localhost:8080/deleteDepartment/' + id).subscribe(
            (response) => {
                console.log('Успешно удалено!', response);
                this.router.navigate(['/department-page']);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }

    public deletePostOfDepartment(id:String|null, postOfDeartment:PostOfDepartment):any{
        return  this.http.delete('http://localhost:8080/deletePostOfDepartment/' + id).subscribe(
            (response) => {
                console.log('Успешно удалено!', response);
                this.router.navigate(['/department-page/description/' + postOfDeartment.department.id]);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }

    public updateDepartment(id:string|any,formData:any):any{
        return  this.http.put('http://localhost:8080/updateDepartment/' + id, formData).subscribe(
            (response) => {
                console.log('Успешно изменено!', response);
                this.router.navigate(['/department-page']);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }

    public updatePostOfDepartment(id:string|any,formData:any):any{
        return  this.http.put('http://localhost:8080/updatePostOfDepartment/' + id, formData).subscribe(
            (response) => {
                console.log('Успешно изменено!', response);
                console.log(formData);
                this.router.navigate(['/department-page/description/' + formData.department.id]);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }



   public addPostOnDepartment(formData:any):void{
    this.router.navigate(['/department-page/addPost/ChoosePost/', formData.departmentId, formData.postId]);
   }

   public addWorkerOnDepartment(formData:any):void{
    this.router.navigate(['/department-page/addWorker/ChooseWorker/', formData.departmentId, formData.workerId]);
   }

   public chooseWorkerOnDepartment(formData:any):void{
    this.router.navigate(['/department-page/addWorker/ChooseWorker/ConfirmWorker/', formData.department.id, formData.worker.id, formData.post.id]);
   }

   public createPostOnDepartment(formData:any):any{
    return  this.http.post('http://localhost:8080/createPostOnDepartment', formData).subscribe(
        (response) => {
            console.log('Успешно отправлено!', response);
            this.router.navigate(['/department-page/description/' + formData.department.id]);
        },
        (error) => {
            console.error('Ошибка отправки данных:', error);
            // Можно добавить обработку ошибок при отправке данных
        }
    );
}

public confirmWorkerOnDepartment(formData:any):any{
    return  this.http.post('http://localhost:8080/confirmWorkerOnDepartment', formData).subscribe(
        (response) => {
            console.log('Успешно отправлено!', response);
            this.router.navigate(['/department-page/description/' + formData.department.id]);
        },
        (error) => {
            console.error('Ошибка отправки данных:', error);
            // Можно добавить обработку ошибок при отправке данных
        }
    );
}

}