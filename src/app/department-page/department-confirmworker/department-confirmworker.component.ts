import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/models/Department';
import { Post } from 'src/app/models/Post';
import { DepartmentService } from 'src/app/service/department.service';
import { DepartmentsAndPostsOfWorkerService } from 'src/app/service/deprtmentsandpostsofworker.service';
import { PostService } from 'src/app/service/post.service';
import { WorkerService } from 'src/app/service/worker.service';
import { Worker } from 'src/app/models/Worker';

@Component({
  selector: 'app-department-confirmworker',
  templateUrl: './department-confirmworker.component.html',
  styleUrls: ['./department-confirmworker.component.css']
})
export class DepartmentConfirmworkerComponent {
  constructor(private title:Title,private departmentService:DepartmentService, private route: ActivatedRoute, private workerService:WorkerService, private departmentsAndPostsOfWorkerService:DepartmentsAndPostsOfWorkerService, private postService:PostService){
    title.setTitle("Добавление сотрудника в отдел")
   }

   post:Post
   worker:Worker
   department:Department

   postId:string|null
   departmentId:string|null
   workerId:string|null

   formData={
    department:{
       id:0
    },
    post:{
      id:0
    },
    worker:{
      id:0
    }
   }

   ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.departmentId = params.get('idDep');
      this.workerId = params.get('idWorker');
      this.postId = params.get('idPost');
    });

    this.departmentService.getDepartmentById(this.departmentId).subscribe((responce: Department) => {
      this.department = responce;
      this.formData.department.id=this.department.id
    });

    this.workerService.getWorkerById(this.workerId).subscribe((responce: Worker) => {
      this.worker = responce;
      this.formData.worker.id=this.worker.id
    });

    this.postService.getPostById(this.postId).subscribe((responce: Post) => {
      this.post = responce;
      this.formData.post.id=this.post.id
    });
  }

  onSubmitConfirmWorker() {
   // здесь вы можете отправить данные с помощью HTTP-запроса
   console.log('Данные формы: ', this.formData);
   this.departmentService.confirmWorkerOnDepartment(this.formData)
  
  }
}
