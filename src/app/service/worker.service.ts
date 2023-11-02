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
}