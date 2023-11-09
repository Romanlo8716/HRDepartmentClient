import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/models/Department';
import { DepartmentService } from 'src/app/service/department.service';
import { DepartmentsAndPostsOfWorkerService } from 'src/app/service/deprtmentsandpostsofworker.service';
import { WorkerService } from 'src/app/service/worker.service';
import { Worker } from 'src/app/models/Worker';
import { DepartmentsAndPostsOfWorker } from 'src/app/models/DepartmentsAndPostsOfWorker';

@Component({
  selector: 'app-department-addworker',
  templateUrl: './department-addworker.component.html',
  styleUrls: ['./department-addworker.component.css']
})
export class DepartmentAddworkerComponent {
   constructor(private departmentsAndPostsOfWorkersService:DepartmentsAndPostsOfWorkerService, private workerService:WorkerService,private title:Title, private route:ActivatedRoute, private departmentService:DepartmentService){
    title.setTitle("Добавление сотрудника в отдел")
   }

   department:Department
   departmentId:string|null
   workers:Worker[]
   departmentsAndPostsOfWorkers:DepartmentsAndPostsOfWorker[]
   candidates:Worker[]

   formData = {
    departmentId: 0,
    workerId: 0
};

   ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.departmentId = params.get('id');
    });


  
    this.departmentService.getDepartmentById(this.departmentId).subscribe((responce: Department) => {
      this.department = responce;
      this.formData.departmentId=this.department.id
    });

    this.workerService.getWorkersOnCompany().subscribe((responce: Worker[]) => {
      this.workers = responce;
     })
 
     this.departmentsAndPostsOfWorkersService.getDepartmentsAndPostsOfWorker().subscribe((responce: DepartmentsAndPostsOfWorker[]) => {
       this.departmentsAndPostsOfWorkers = responce;
      })


      this.workerService.getCandidates().subscribe((responce: Worker[]) => {
        this.candidates = responce;
       })
   }

   getDepartmentAndPostOfWorker(worker:Worker, depAndPost:DepartmentsAndPostsOfWorker[]):string{
    let item: string = '';

    for(const dep of depAndPost){
      if(worker.id==dep.worker.id){
        item= dep.department.nameDepartment + " : " + dep.post.namePost;
      }
    }

    return item

   }

   onSubmitAddWorker(workerId:number) {
    this.formData.workerId = workerId
   // здесь вы можете отправить данные с помощью HTTP-запроса
   console.log('Данные формы: ', this.formData);
   this.departmentService.addWorkerOnDepartment(this.formData)
  
 }
  }
