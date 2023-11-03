import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DepartmentsAndPostsOfWorker } from 'src/app/models/DepartmentsAndPostsOfWorker';
import { Worker } from 'src/app/models/Worker';
import { DepartmentsAndPostsOfWorkerService } from 'src/app/service/deprtmentsandpostsofworker.service';
import { WorkerService } from 'src/app/service/worker.service';

@Component({
  selector: 'app-worker-all',
  templateUrl: './worker-all.component.html',
  styleUrls: ['./worker-all.component.css']
})
export class WorkerAllComponent {
  constructor(private departmentsAndPostsOfWorkersService:DepartmentsAndPostsOfWorkerService,  private workerService:WorkerService, private title:Title){
    title.setTitle("Все сотрудники компании")
  }

  workers:Worker[]
  departmentsAndPostsOfWorkers:DepartmentsAndPostsOfWorker[]
  flag:boolean
  isEmployeeFound: boolean = false;
  stopIteration: boolean = false; 

  setFlagTrue():boolean {
    return this.flag=true
  }

  setFlagFalse(): boolean {
    return this.flag=false
  }

  

  ngOnInit(): void{
    this.workerService.getWorker().subscribe((responce: Worker[]) => {
     this.workers = responce;
    })
   
    this.departmentsAndPostsOfWorkersService.getDepartmentsAndPostsOfWorker().subscribe((responce: DepartmentsAndPostsOfWorker[]) => {
      this.departmentsAndPostsOfWorkers = responce;
     })
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

   checkWorkers():Number{
    if(this.workers){
      return this.workers.length
    }
    else{
      return 0
    }
 }
}
