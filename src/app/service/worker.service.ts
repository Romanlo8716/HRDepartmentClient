import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({providedIn: 'root'})
export class WorkerService{

    constructor(private router:Router, private http : HttpClient) {}

    public getWorker():Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getWorkers`);
    }

    public getWorkerById(id:String|null):any{
        return this.http.get<Worker>(`http://localhost:8080/getWorkerById/`+ id);
    }

    public getCandidates():Observable<any>{
        return this.http.get<any>('http://localhost:8080/getCandidates');
    }

    public getDissmised():Observable<any>{
        return this.http.get<any>('http://localhost:8080/getDissmised');
    }

    public getWorkersOnCompany():Observable<any>{
        return this.http.get<any>('http://localhost:8080/getWorkersOnCompany');
    }

    public createWorker(formData:any):any{
        return  this.http.post('http://localhost:8080/createWorkers', formData).subscribe(
            (response) => {
                console.log('Успешно отправлено!', response);
                this.router.navigate(['/worker-page']);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }

    public deleteWorker(id:String|null):any{
        return  this.http.delete('http://localhost:8080/deleteWorker/' + id).subscribe(
            (response) => {
                console.log('Успешно удалено!', response);
                this.router.navigate(['/worker-page/all']);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }

    public dismissWorker(id:String|null):any{
        return  this.http.put('http://localhost:8080/dismissWorker/' + id, {}).subscribe(
            (response) => {
                console.log('Сотрудник уволен!', response);
                this.router.navigate(['/worker-page/all']);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }

    public recoveryWorker(id:String|null):any{
        return  this.http.put('http://localhost:8080/recoveryWorker/' + id, {}).subscribe(
            (response) => {
                console.log('Сотрудник восстановлен!', response);
                this.router.navigate(['/worker-page/all']);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }
}