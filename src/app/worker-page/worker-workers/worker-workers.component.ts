import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { map } from 'rxjs';
import { DepartmentsAndPostsOfWorker } from 'src/app/models/DepartmentsAndPostsOfWorker';
import { Worker } from 'src/app/models/Worker';
import { DepartmentsAndPostsOfWorkerService } from 'src/app/service/deprtmentsandpostsofworker.service';
import { WorkerService } from 'src/app/service/worker.service';

@Component({
  selector: 'app-worker-workers',
  templateUrl: './worker-workers.component.html',
  styleUrls: ['./worker-workers.component.css']
})
export class WorkerWorkersComponent {
  constructor(private departmentsAndPostsOfWorkersService:DepartmentsAndPostsOfWorkerService, private workerService:WorkerService, private title:Title){
    title.setTitle("Сотрудники");
  }

  workers:Worker[]
  departmentsAndPostsOfWorkers:DepartmentsAndPostsOfWorker[]

  ngOnInit(): void{
    this.workerService.getWorkersOnCompany().subscribe((responce: Worker[]) => {
     this.workers = responce;
    })

    this.departmentsAndPostsOfWorkersService.getDepartmentsAndPostsOfWorker().subscribe((responce: DepartmentsAndPostsOfWorker[]) => {
      this.departmentsAndPostsOfWorkers = responce;
     })
   }

   checkWorkers():Number{
      if(this.workers){
        return this.workers.length
      }
      else{
        return 0
      }
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

   setStatus(worker:Worker, depAndPostofWorkers:DepartmentsAndPostsOfWorker[]):string{
     
    status:String;

    if(worker.dismiss==true){
     status="Уволен"
    }
    else{
     if(depAndPostofWorkers){
       if(depAndPostofWorkers.length>0){
         for( const dep of depAndPostofWorkers){
           if(worker.id==dep.worker.id){
             status= "Сотрудник"
             break
           }
           else{
             status= "Кандидат"
           }
         }
        }
        else{
         status="Кандидат"
        }
     }
     else{
       status="Кандидат"
     }
    }

          return status
  }


}
