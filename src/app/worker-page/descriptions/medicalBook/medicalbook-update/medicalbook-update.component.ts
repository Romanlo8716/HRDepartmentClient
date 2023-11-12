import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MedicalBook } from 'src/app/models/MedicalBook';
import { WorkerService } from 'src/app/service/worker.service';
import { WorkerDescriptionService } from 'src/app/service/workerdescription.service';
import { Worker } from 'src/app/models/Worker';

@Component({
  selector: 'app-medicalbook-update',
  templateUrl: './medicalbook-update.component.html',
  styleUrls: ['./medicalbook-update.component.css']
})
export class MedicalbookUpdateComponent {
  constructor(private workerDescriptionService:WorkerDescriptionService,private route: ActivatedRoute,private workerService:WorkerService, private titleService: Title) {
    this.titleService.setTitle('Изменение данных медицинской книги');
  }

  worker:Worker
  workerId:String
  medicalBook:MedicalBook
  medicalBookId:string|null

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
      this.medicalBookId = params.get('id');
      

    });

    this.workerDescriptionService.getMedicalBookById(this.medicalBookId).subscribe((responce: MedicalBook) => {
      this.medicalBook = responce;
      this.workerId=this.medicalBook.worker.id.toString()
      this.formData.dateExam = this.formatDate(this.medicalBook.dateExam)
      this.formData.placeExam = this.medicalBook.placeExam
      this.formData.conclusion = this.medicalBook.conclusion
     
      // console.log(this.workerId);
      this.workerService.getWorkerById(this.workerId).subscribe((responce: Worker) => {
        this.worker = responce;
        
        this.formData.worker.id = this.worker.id
       })
      
     })


   

    

   

  }

  onSubmitMedicalBook() {
    
   // здесь вы можете отправить данные с помощью HTTP-запроса
   console.log('Данные формы: ', this.formData);
   this.workerDescriptionService.updateMedicalBook(this.medicalBook.id,this.formData)
  
 }

 onDateOfBirthChange(event: any) {
  // Обработка изменений даты рождения
  const formattedDate = this.formatDate(event);
  console.log('Formatted Date:', formattedDate);
}

formatDate(date: any): string {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}
}
