import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Vacation } from 'src/app/models/Vacation';
import { WorkerService } from 'src/app/service/worker.service';
import { WorkerDescriptionService } from 'src/app/service/workerdescription.service';
import { Worker } from 'src/app/models/Worker';

@Component({
  selector: 'app-vacation-all',
  templateUrl: './vacation-all.component.html',
  styleUrls: ['./vacation-all.component.css']
})
export class VacationAllComponent {
  constructor(private workerDescriptionService:WorkerDescriptionService,private route: ActivatedRoute, private workerDescriprionService:WorkerDescriptionService,private workerService:WorkerService, private titleService: Title) {
    this.titleService.setTitle('Данные трудовой книги');
  }

  worker:Worker
  workerId:string|null
  vacations:Vacation[]
  

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.workerId = params.get('id');
      
     
    });

    this.workerService.getWorkerById(this.workerId).subscribe((responce: Worker) => {
     this.worker = responce;
    })

    this.workerDescriptionService.getDescriptionWorkerVacations(this.workerId).subscribe((response: Vacation[]) => {
      this.vacations = response;
     })

  }

  formatDate(date: any): string {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${day}.${month}.${year}`;
  }
}
