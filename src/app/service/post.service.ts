import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Post } from "../models/Post";

@Injectable({providedIn: 'root'})
export class PostService{

    constructor(private router:Router, private http : HttpClient) {}

    public getPost():Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getPosts`);
    }

    public getPostById(id:String|null):any{
        return this.http.get<Post>(`http://localhost:8080/getPostById/`+ id);
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

    public deletePost(id:String|null):any{
        return  this.http.delete('http://localhost:8080/deletePost/' + id).subscribe(
            (response) => {
                console.log('Успешно удалено!', response);
                this.router.navigate(['/post-page']);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }

    public updatePost(id:string|any,formData:any):any{
        return  this.http.put('http://localhost:8080/updatePost/' + id, formData).subscribe(
            (response) => {
                console.log('Успешно изменено!', response);
                this.router.navigate(['/post-page']);
            },
            (error) => {
                console.error('Ошибка отправки данных:', error);
                // Можно добавить обработку ошибок при отправке данных
            }
        );
    }
}