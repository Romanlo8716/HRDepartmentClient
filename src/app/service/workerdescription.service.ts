import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DescroptionWorker } from "../models/DescriptionWorker";

@Injectable({providedIn: 'root'})
export class WorkerDescriptionService{

    constructor(private http : HttpClient) {}

    public getWorkerById(id:String|null):any{
        return this.http.get<any>(`http://localhost:8080/getWorkerById/` + id);
    }

    public getDescriptionWorkerLaborBooks(id:String|null):Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getDescriptionWorkerLaborBooks/` + id);
    }

    public getDescriptionWorkerEducations(id:String|null):Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getDescriptionWorkerEducations/` + id);
    }

    public getDescriptionWorkerVacations(id:String|null):Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getDescriptionWorkerVacations/` + id);
    }

    public getDescriptionWorkerMedicalBooks(id:String|null):Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getDescriptionWorkerMedicalBooks/` + id);
    }

    public getDescriptionWorkerDepartmentsAndPosts(id:String|null):Observable<any>{
        return this.http.get<any>(`http://localhost:8080/getDescriptionWorkerDepartmentsAndPosts/` + id);
    }
}