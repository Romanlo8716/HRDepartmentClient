import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DescroptionWorker } from "../models/DescriptionWorker";
import { Router } from "@angular/router";
import { Worker } from "../models/Worker";

@Injectable({providedIn: 'root'})
export class WorkerDescriptionService{

    constructor(private http : HttpClient,private router:Router) {}

    public getWorkerById(id:String|null):any{
        return this.http.get<any>(`http://localhost:8080/getWorkerById/` + id);
    }

    public getDescriptionWorkerLaborBooks(id:String|null):Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getDescriptionWorkerLaborBooks/` + id);
    }

    public getLaborBookById(id:String|null):Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getLaborBookById/` + id);
    }

    public deleteLaborBook(id:string|null, worker:Worker):any{
        return  this.http.delete('http://localhost:8080/deleteLaborBook/' + id).subscribe(
            (response) => {
                console.log('Успешно удалено!', response);
                this.router.navigate(['/worker-page/worker-description-page/' + worker.id]);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }

    public updateLaborBook(id:string|any,formData:any):any{
        return  this.http.put('http://localhost:8080/updateLaborBook/' + id, formData).subscribe(
            (response) => {
                console.log('Успешно изменено!', response);
                this.router.navigate(['/worker-page/worker-description-page/' + formData.worker.id]);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }

    public getDescriptionWorkerEducations(id:String|null):Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getDescriptionWorkerEducations/` + id);
    }

    public getEducationById(id:String|null):Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getEducationById/` + id);
    }

    public deleteEducation(id:string|null, worker:Worker):any{
        return  this.http.delete('http://localhost:8080/deleteEducation/' + id).subscribe(
            (response) => {
                console.log('Успешно удалено!', response);
                this.router.navigate(['/worker-page/worker-description-page/' + worker.id]);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }

    public updateEducation(id:string|any,formData:any):any{
        return  this.http.put('http://localhost:8080/updateEducation/' + id, formData).subscribe(
            (response) => {
                console.log('Успешно изменено!', response);
                this.router.navigate(['/worker-page/worker-description-page/' + formData.worker.id]);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }

    public getDescriptionWorkerVacations(id:String|null):Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getDescriptionWorkerVacations/` + id);
    }

    public getVacationById(id:String|null):Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getVacationById/` + id);
    }

    public deleteVacation(id:string|null, worker:Worker):any{
        return  this.http.delete('http://localhost:8080/deleteVacation/' + id).subscribe(
            (response) => {
                console.log('Успешно удалено!', response);
                this.router.navigate(['/worker-page/worker-description-page/' + worker.id]);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }

    public updateVacation(id:string|any,formData:any):any{
        return  this.http.put('http://localhost:8080/updateVacation/' + id, formData).subscribe(
            (response) => {
                console.log('Успешно изменено!', response);
                this.router.navigate(['/worker-page/worker-description-page/' + formData.worker.id]);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }

    public getDescriptionWorkerMedicalBooks(id:String|null):Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getDescriptionWorkerMedicalBooks/` + id);
    }

    public getMedicalBookById(id:String|null):Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getMedicalBookById/` + id);
    }

    public deleteMedicalBook(id:string|null, worker:Worker):any{
        return  this.http.delete('http://localhost:8080/deleteMedicalBook/' + id).subscribe(
            (response) => {
                console.log('Успешно удалено!', response);
                this.router.navigate(['/worker-page/worker-description-page/' + worker.id]);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }

    public updateMedicalBook(id:string|any,formData:any):any{
        return  this.http.put('http://localhost:8080/updateMedicalBook/' + id, formData).subscribe(
            (response) => {
                console.log('Успешно изменено!', response);
                this.router.navigate(['/worker-page/worker-description-page/' + formData.worker.id]);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }

    public getDescriptionWorkerDepartmentsAndPosts(id:String|null):Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getDescriptionWorkerDepartmentsAndPosts/` + id);
    }

    public getDepartmentsAndPostsOfWorkerById(id:String|null):Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getDepartmentsAndPostsOfWorkerById/` + id);
    }

    public deleteDepartmentsAndPostsOfWorker(id:string|null, worker:Worker):any{
        return  this.http.delete('http://localhost:8080/deleteDepartmentsAndPostsOfWorker/' + id).subscribe(
            (response) => {
                console.log('Успешно удалено!', response);
                this.router.navigate(['/worker-page/worker-description-page/' + worker.id]);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }

    public addMilitary(id:string|any,formData:any):any{
        return  this.http.put('http://localhost:8080/addMilitary/' + id, formData).subscribe(
            (response) => {
                console.log('Успешно изменено!', response);
                this.router.navigate(['/worker-page/worker-description-page/' + id]);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }

    public addLaborBook(formData:any):any{
        return  this.http.post('http://localhost:8080/addLaborBook', formData).subscribe(
            (response) => {
                console.log('Успешно изменено!', response);
                this.router.navigate(['/worker-page/worker-description-page/' + formData.worker.id]);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }

    public addEducation(formData:any):any{
        return  this.http.post('http://localhost:8080/addEducation', formData).subscribe(
            (response) => {
                console.log('Успешно изменено!', response);
                this.router.navigate(['/worker-page/worker-description-page/' + formData.worker.id]);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }

    public addVacation(formData:any):any{
        return  this.http.post('http://localhost:8080/addVacation', formData).subscribe(
            (response) => {
                console.log('Успешно изменено!', response);
                this.router.navigate(['/worker-page/worker-description-page/' + formData.worker.id]);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }

    public addMedicalBook(formData:any):any{
        return  this.http.post('http://localhost:8080/addMedicalBook', formData).subscribe(
            (response) => {
                console.log('Успешно изменено!', response);
                this.router.navigate(['/worker-page/worker-description-page/' + formData.worker.id]);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }
}