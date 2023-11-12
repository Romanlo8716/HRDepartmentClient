import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Education } from 'src/app/models/Education';
import { WorkerService } from 'src/app/service/worker.service';
import { WorkerDescriptionService } from 'src/app/service/workerdescription.service';
import { Worker } from 'src/app/models/Worker';

@Component({
  selector: 'app-education-update',
  templateUrl: './education-update.component.html',
  styleUrls: ['./education-update.component.css']
})
export class EducationUpdateComponent {
  constructor(private workerDescriptionService:WorkerDescriptionService,private route: ActivatedRoute, private workerDescriprionService:WorkerDescriptionService,private workerService:WorkerService, private titleService: Title) {
    this.titleService.setTitle('Изменение данных об образовании');
  }

  worker:Worker
  workerId:String
  education:Education
  educationId:string|null

  formData={
    seriesDiploma:'',
    numberDiploma:'',
    special:'',
    dateYearEnd:'',
    worker:{
      id:0
    }
  }

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.educationId = params.get('id');
      

    });

    this.workerDescriptionService.getEducationById(this.educationId).subscribe((responce: Education) => {
      this.education = responce;
      this.workerId=this.education.worker.id.toString()
      this.formData.dateYearEnd = this.formatDate(this.education.dateYearEnd)
      this.formData.seriesDiploma = this.education.seriesDiploma
      this.formData.numberDiploma = this.education.numberDiploma
      this.formData.special = this.education.special
      // console.log(this.workerId);
      this.workerService.getWorkerById(this.workerId).subscribe((responce: Worker) => {
        this.worker = responce;
        
        this.formData.worker.id = this.worker.id
       })
      
     })


   

    

   

  }

  onSubmitEducation() {
    
   // здесь вы можете отправить данные с помощью HTTP-запроса
   console.log('Данные формы: ', this.formData);
   this.workerDescriprionService.updateEducation(this.education.id,this.formData)
  
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
