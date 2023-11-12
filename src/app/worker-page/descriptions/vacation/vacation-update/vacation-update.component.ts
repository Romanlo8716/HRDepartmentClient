import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Vacation } from 'src/app/models/Vacation';
import { WorkerService } from 'src/app/service/worker.service';
import { WorkerDescriptionService } from 'src/app/service/workerdescription.service';
import { Worker } from 'src/app/models/Worker';

@Component({
  selector: 'app-vacation-update',
  templateUrl: './vacation-update.component.html',
  styleUrls: ['./vacation-update.component.css']
})
export class VacationUpdateComponent {
  constructor(private workerDescriptionService:WorkerDescriptionService,private route: ActivatedRoute,private workerService:WorkerService, private titleService: Title) {
    this.titleService.setTitle('Изменение данных об отпусках');
  }

  worker:Worker
  workerId:String
  vacation:Vacation
  vacationId:string|null

  formData={
    typeVacation:'',
    dateStartVacation:'',
    dateEndVacation:'',
    worker:{
      id:0
    }
  }

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.vacationId = params.get('id');
      

    });

    this.workerDescriptionService.getVacationById(this.vacationId).subscribe((responce: Vacation) => {
      this.vacation = responce;
      this.workerId=this.vacation.worker.id.toString()
      this.formData.dateStartVacation = this.formatDate(this.vacation.dateStartVacation)
      this.formData.dateEndVacation = this.formatDate(this.vacation.dateEndVacation)
      this.formData.typeVacation = this.vacation.typeVacation
     
      // console.log(this.workerId);
      this.workerService.getWorkerById(this.workerId).subscribe((responce: Worker) => {
        this.worker = responce;
        
        this.formData.worker.id = this.worker.id
       })
      
     })

  }

  onSubmitVacation() {
    
   // здесь вы можете отправить данные с помощью HTTP-запроса
   console.log('Данные формы: ', this.formData);
   this.workerDescriptionService.updateVacation(this.vacation.id,this.formData)
  
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
