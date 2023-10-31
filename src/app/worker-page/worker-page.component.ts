import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { WorkerService } from '../service/worker.service';
import { Worker } from '../models/Worker';
import { Department } from '../models/Department';
import { DepartmentService } from '../service/department.service';
import { DepartmentsAndPostsOfWorkerService } from '../service/deprtmentsandpostsofworker.service';
import { DepartmentsAndPostsOfWorker } from '../models/DepartmentsAndPostsOfWorker';
import { WorkerDescriptionPageComponent } from '../worker-description-page/worker-description-page.component';

@Component({
  selector: 'app-worker-page',
  templateUrl: './worker-page.component.html',
  styleUrls: ['./worker-page.component.css']
})

export class WorkerPageComponent {
  constructor(private departmentService:DepartmentService, private workerService: WorkerService, private departmentsAndPostsOfWorkerService: DepartmentsAndPostsOfWorkerService, private titleService: Title) {
    this.titleService.setTitle('Сотрудники');
  }

  workers: Worker[];
  departmentsAndPostsOfWorker: DepartmentsAndPostsOfWorker[];
  groupByDepartmentsAndPostsOfWorker: DepartmentsAndPostsOfWorker[];

ngOnInit(): void{
 this.workerService.getWorker().subscribe((responce: Worker[]) => {
  this.workers = responce;
 })

 this.departmentsAndPostsOfWorkerService.getDepartmentsAndPostsOfWorker().subscribe((responce: DepartmentsAndPostsOfWorker[]) => {
  this.departmentsAndPostsOfWorker = responce;
 })

 this.departmentsAndPostsOfWorkerService.getGroupByDepartmentDepartmentsAndPostsOfWorker().subscribe((response: string[]) => {
  this.groupByDepartmentsAndPostsOfWorker = response.map(item => JSON.parse(item));
  
});
}

}
