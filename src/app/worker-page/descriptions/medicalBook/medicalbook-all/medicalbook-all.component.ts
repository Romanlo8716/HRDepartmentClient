import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MedicalBook } from 'src/app/models/MedicalBook';
import { WorkerService } from 'src/app/service/worker.service';
import { WorkerDescriptionService } from 'src/app/service/workerdescription.service';
import { Worker } from 'src/app/models/Worker';

@Component({
  selector: 'app-medicalbook-all',
  templateUrl: './medicalbook-all.component.html',
  styleUrls: ['./medicalbook-all.component.css']
})
export class MedicalbookAllComponent {
  constructor(private workerDescriptionService:WorkerDescriptionService,private route: ActivatedRoute, private workerDescriprionService:WorkerDescriptionService,private workerService:WorkerService, private titleService: Title) {
    this.titleService.setTitle('Данные трудовой книги');
  }

  worker:Worker
  workerId:string|null
  medicalBooks:MedicalBook[]
  

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.workerId = params.get('id');
      
     
    });

    this.workerService.getWorkerById(this.workerId).subscribe((responce: Worker) => {
     this.worker = responce;
    })

    this.workerDescriptionService.getDescriptionWorkerMedicalBooks(this.workerId).subscribe((response: MedicalBook[]) => {
      this.medicalBooks = response;
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
