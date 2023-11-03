import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { WorkerService } from 'src/app/service/worker.service';
import { Worker } from 'src/app/models/Worker';

@Component({
  selector: 'app-worker-dismissed',
  templateUrl: './worker-dismissed.component.html',
  styleUrls: ['./worker-dismissed.component.css']
})
export class WorkerDismissedComponent {
   constructor(private workerService:WorkerService, private title:Title){
    title.setTitle("Уволенные сотрудники");
   }

   dissmised:Worker[]

   ngOnInit(): void{
     this.workerService.getDissmised().subscribe((responce: Worker[]) => {
      this.dissmised = responce;
     })
    }
 
    checkWorkers():Number{
     if(this.dissmised){
       return this.dissmised.length
     }
     else{
       return 0
     }
  }
}
