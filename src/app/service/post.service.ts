import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class PostService{

    constructor(private router:Router, private http : HttpClient) {}

    public getPost():Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getPosts`);
    }

    public createPost(formData:any):any{
        return  this.http.post('http://localhost:8080/createPosts', formData).subscribe(
            (response) => {
                console.log('Успешно отправлено!', response);
                this.router.navigate(['/post-page']);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }
}