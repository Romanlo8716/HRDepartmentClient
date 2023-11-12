import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Education } from 'src/app/models/Education';
import { WorkerService } from 'src/app/service/worker.service';
import { WorkerDescriptionService } from 'src/app/service/workerdescription.service';
import { Worker } from 'src/app/models/Worker';

@Component({
  selector: 'app-education-all',
  templateUrl: './education-all.component.html',
  styleUrls: ['./education-all.component.css']
})
export class EducationAllComponent {
  constructor(private workerDescriptionService:WorkerDescriptionService,private route: ActivatedRoute,private workerService:WorkerService, private titleService: Title) {
    this.titleService.setTitle('Данные трудовой книги');
  }

  worker:Worker
  workerId:string|null
  educations:Education[]
  

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.workerId = params.get('id');
      
     
    });

    this.workerService.getWorkerById(this.workerId).subscribe((responce: Worker) => {
     this.worker = responce;
    })

    this.workerDescriptionService.getDescriptionWorkerEducations(this.workerId).subscribe((response: Education[]) => {
      this.educations = response;
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
