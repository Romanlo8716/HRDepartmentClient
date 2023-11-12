import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { WorkerService } from 'src/app/service/worker.service';
import { WorkerDescriptionService } from 'src/app/service/workerdescription.service';
import { Worker } from 'src/app/models/Worker';
import { LaborBook } from 'src/app/models/LaborBook';

@Component({
  selector: 'app-laborbook-update',
  templateUrl: './laborbook-update.component.html',
  styleUrls: ['./laborbook-update.component.css']
})
export class LaborbookUpdateComponent {
  constructor(private workerDescriptionService:WorkerDescriptionService,private route: ActivatedRoute, private workerDescriprionService:WorkerDescriptionService,private workerService:WorkerService, private titleService: Title) {
    this.titleService.setTitle('Изменение данных трудовой книги');
  }

  worker:Worker
  workerId:String
  laborBook:LaborBook
  laborBookId:string|null

  formData={
    dateRecord:'',
    nameWork:'',
    informationAboutWork:'',
    nameDocument:'',
    numberDocument:'',
    worker:{
      id:0
    }
  }

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.laborBookId = params.get('id');
      

    });

    this.workerDescriptionService.getLaborBookById(this.laborBookId).subscribe((responce: LaborBook) => {
      this.laborBook = responce;
      this.workerId=this.laborBook.worker.id.toString()
      this.formData.dateRecord = this.formatDate(this.laborBook.dateRecord)
      this.formData.informationAboutWork = this.laborBook.informationAboutWork
      this.formData.nameDocument = this.laborBook.nameDocument
      this.formData.nameWork = this.laborBook.nameWork
      this.formData.numberDocument = this.laborBook.nameDocument
      // console.log(this.workerId);
      this.workerService.getWorkerById(this.workerId).subscribe((responce: Worker) => {
        this.worker = responce;
        
        this.formData.worker.id = this.worker.id
       })
      
     })


   

    

   

  }

  onSubmitLaborBook() {
    
   // здесь вы можете отправить данные с помощью HTTP-запроса
   console.log('Данные формы: ', this.formData);
   this.workerDescriprionService.updateLaborBook(this.laborBook.id,this.formData)
  
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
