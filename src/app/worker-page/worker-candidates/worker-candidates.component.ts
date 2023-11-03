import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { WorkerService } from 'src/app/service/worker.service';
import { Worker } from 'src/app/models/Worker';

@Component({
  selector: 'app-worker-candidates',
  templateUrl: './worker-candidates.component.html',
  styleUrls: ['./worker-candidates.component.css']
})
export class WorkerCandidatesComponent {
  constructor(private workerService:WorkerService, private title:Title){
    title.setTitle("Кандидаты")
  }

  candidates:Worker[]

  ngOnInit(): void{
    this.workerService.getCandidates().subscribe((responce: Worker[]) => {
     this.candidates = responce;
    })
   }

   checkWorkers():Number{
    if(this.candidates){
      return this.candidates.length
    }
    else{
      return 0
    }
 }

}
