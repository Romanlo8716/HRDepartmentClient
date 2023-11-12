import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MedicalBook } from 'src/app/models/MedicalBook';
import { WorkerService } from 'src/app/service/worker.service';
import { WorkerDescriptionService } from 'src/app/service/workerdescription.service';
import { Worker } from 'src/app/models/Worker';

@Component({
  selector: 'app-medicalbook-delete',
  templateUrl: './medicalbook-delete.component.html',
  styleUrls: ['./medicalbook-delete.component.css']
})
export class MedicalbookDeleteComponent {
  constructor(private title:Title, private route:ActivatedRoute, private workerDescriptionService:WorkerDescriptionService)
  {
    title.setTitle("Удаление данных трудовой книги")
  }

  medicalBook:MedicalBook
  medicalBookId:string|null

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.medicalBookId = params.get('id');
      
     
    });

    this.workerDescriptionService.getMedicalBookById(this.medicalBookId).subscribe((responce: MedicalBook) => {
     this.medicalBook = responce;
    })
  }

  onSubmitDelete() {
    // здесь вы можете отправить данные с помощью HTTP-запроса
    this.workerDescriptionService.deleteMedicalBook(this.medicalBookId, this.medicalBook.worker)
   
  }
}
