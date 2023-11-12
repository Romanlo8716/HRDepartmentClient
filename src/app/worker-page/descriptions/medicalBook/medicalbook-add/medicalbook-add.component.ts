import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { WorkerService } from 'src/app/service/worker.service';
import { WorkerDescriptionService } from 'src/app/service/workerdescription.service';
import { Worker } from 'src/app/models/Worker';

@Component({
  selector: 'app-medicalbook-add',
  templateUrl: './medicalbook-add.component.html',
  styleUrls: ['./medicalbook-add.component.css']
})
export class MedicalbookAddComponent {
  constructor(private route: ActivatedRoute, private workerDescriprionService:WorkerDescriptionService,private workerService:WorkerService, private titleService: Title) {
    this.titleService.setTitle('Добавление данных медицинской книги');
  }

  worker:Worker
  workerId:string|null

  formData={
    placeExam:'',
    dateExam:'',
    conclusion:'',
    worker:{
      id:0
    }
  }

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.workerId = params.get('id');
      
     
    });

    this.workerService.getWorkerById(this.workerId).subscribe((responce: Worker) => {
     this.worker = responce;
     this.formData.worker.id = this.worker.id
    })

  }

  onSubmitMedicalBook() {
    
   // здесь вы можете отправить данные с помощью HTTP-запроса
   console.log('Данные формы: ', this.formData);
   this.workerDescriprionService.addMedicalBook(this.formData)
  
 }
}
