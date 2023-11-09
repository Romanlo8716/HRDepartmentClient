import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/models/Department';
import { DepartmentService } from 'src/app/service/department.service';
import { WorkerService } from 'src/app/service/worker.service';
import { Worker } from 'src/app/models/Worker';
import { PostOfDepartment } from 'src/app/models/PostOfDepartment';
import { DepartmentsAndPostsOfWorker } from 'src/app/models/DepartmentsAndPostsOfWorker';
import { DepartmentsAndPostsOfWorkerService } from 'src/app/service/deprtmentsandpostsofworker.service';

@Component({
  selector: 'app-department-chooseworker',
  templateUrl: './department-chooseworker.component.html',
  styleUrls: ['./department-chooseworker.component.css']
})
export class DepartmentChooseworkerComponent {
  constructor(private title:Title,private departmentService:DepartmentService, private route: ActivatedRoute, private workerService:WorkerService, private departmentsAndPostsOfWorkerService:DepartmentsAndPostsOfWorkerService){
    title.setTitle("Добавление сотрудника в отдел")
   }

   department:Department
   departmentId:string|null
   worker:Worker
   workerId:string|null
   idDep:string|null
   idWorker:string|null
   postOfDepartments:PostOfDepartment[]
   open:number
   close:number=0
   depAndPostsOfWorker:DepartmentsAndPostsOfWorker[]

   formData={
    department:{
      id:0
    },
    worker:{
      id:0
    },
    post:{
      id:0
    }
   }


ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idDep = params.get('idDep');
      this.idWorker = params.get('idWorker');
    });


    this.departmentService.getDepartmentById(this.idDep).subscribe((responce: Department) => {
      this.department = responce;
      this.formData.department.id=this.department.id
    });

    this.workerService.getWorkerById(this.idWorker).subscribe((responce: Worker) => {
      this.worker = responce;
      this.formData.worker.id = this.worker.id
    });

    this.departmentService.getPostOfDepartmentByDepartmentId(this.idDep).subscribe((responce: PostOfDepartment[]) => {
      this.postOfDepartments = responce;
     })

     this.departmentsAndPostsOfWorkerService.getDepartmentsAndPostsOfWorkerByDepartmentId(this.idDep).subscribe((responce: DepartmentsAndPostsOfWorker[]) => {
      this.depAndPostsOfWorker = responce;
     })
  }

  closePlace(postOfDep:PostOfDepartment, depAndPost:DepartmentsAndPostsOfWorker[]):number{

    if(depAndPost.length ==0){
      this.close=0;
     }
     else{
      for(const item of depAndPost){
        if(postOfDep.post.id==item.post.id){
          this.close +=1;
        }
       }
     }
     //console.log("id post PostOfDep:" + postOfDep.post.id);
     
     return this.close;
  }

  openPlace(all:number,close:number):number{
     this.open=all-close;
     return this.open;
  }

  addclose():void{
    this.close +=1
  }

  zeroClose():void{
    this.close =0
  }

 onSubmitChooseWorker(postId:number) {
  this.formData.post.id = postId
 // здесь вы можете отправить данные с помощью HTTP-запроса
 console.log('Данные формы: ', this.formData);
 this.departmentService.chooseWorkerOnDepartment(this.formData)

}
}
