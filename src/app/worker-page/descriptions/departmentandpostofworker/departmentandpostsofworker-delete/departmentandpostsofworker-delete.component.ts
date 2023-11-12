import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DepartmentsAndPostsOfWorker } from 'src/app/models/DepartmentsAndPostsOfWorker';
import { WorkerDescriptionService } from 'src/app/service/workerdescription.service';

@Component({
  selector: 'app-departmentandpostsofworker-delete',
  templateUrl: './departmentandpostsofworker-delete.component.html',
  styleUrls: ['./departmentandpostsofworker-delete.component.css']
})
export class DepartmentandpostsofworkerDeleteComponent {
  constructor(private title:Title, private route:ActivatedRoute, private workerDescriptionService:WorkerDescriptionService)
  {
    title.setTitle("Удаление сотрудника из отдела")
  }

  depAndPostOfWorker:DepartmentsAndPostsOfWorker
  depAndPostOfWorkerId:string|null

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.depAndPostOfWorkerId = params.get('id');
      
     
    });

    this.workerDescriptionService.getDepartmentsAndPostsOfWorkerById(this.depAndPostOfWorkerId).subscribe((responce: DepartmentsAndPostsOfWorker) => {
     this.depAndPostOfWorker = responce;
    })
  }

  onSubmitDelete() {
    // здесь вы можете отправить данные с помощью HTTP-запроса
    this.workerDescriptionService.deleteDepartmentsAndPostsOfWorker(this.depAndPostOfWorkerId, this.depAndPostOfWorker.worker)
   
  }
}
