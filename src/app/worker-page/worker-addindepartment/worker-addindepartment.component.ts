import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/models/Department';
import { Worker } from 'src/app/models/Worker';
import { DepartmentService } from 'src/app/service/department.service';
import { WorkerService } from 'src/app/service/worker.service';

@Component({
  selector: 'app-worker-addindepartment',
  templateUrl: './worker-addindepartment.component.html',
  styleUrls: ['./worker-addindepartment.component.css']
})
export class WorkerAddindepartmentComponent {
  constructor(private route: ActivatedRoute, private workerService: WorkerService, private titleService: Title, private departmentService:DepartmentService) {
    this.titleService.setTitle('Добавление сотрудника в отдел');
  }

  worker:Worker
  workerId:string|null
  departments:Department[]

  formData = {
    departmentId: 0,
    workerId: 0
};

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.workerId = params.get('id');
      
     
    });

    this.workerService.getWorkerById(this.workerId).subscribe((responce: Worker) => {
     this.worker = responce;
     this.formData.workerId = this.worker.id
    })

    this.departmentService.getDepartment().subscribe((responce: Department[]) => {
      this.departments = responce;
     })
  }

  onSubmitAddWorkerInDepartment(departmentId:number) {
    this.formData.departmentId = departmentId
   // здесь вы можете отправить данные с помощью HTTP-запроса
   console.log('Данные формы: ', this.formData);
   this.departmentService.addWorkerOnDepartment(this.formData)
  
 }
}
