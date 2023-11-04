import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { WorkerService } from 'src/app/service/worker.service';
import { Worker } from 'src/app/models/Worker';

@Component({
  selector: 'app-worker-dismiss',
  templateUrl: './worker-dismiss.component.html',
  styleUrls: ['./worker-dismiss.component.css']
})
export class WorkerDismissComponent {
  constructor(private workerService:WorkerService, private route:ActivatedRoute, private title:Title){
    title.setTitle("Увольнение сотрудника")
  }

  worker: Worker
  workerId:String|null

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.workerId = params.get('id');
      
     
    });

    this.workerService.getWorkerById(this.workerId).subscribe((responce: Worker) => {
     this.worker = responce;
    })

   }

   onSubmitDismiss() {
    // здесь вы можете отправить данные с помощью HTTP-запроса
    this.workerService.dismissWorker(this.workerId)
   
  }
}
