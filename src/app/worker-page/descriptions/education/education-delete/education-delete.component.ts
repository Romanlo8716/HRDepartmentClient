import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Education } from 'src/app/models/Education';
import { WorkerDescriptionService } from 'src/app/service/workerdescription.service';

@Component({
  selector: 'app-education-delete',
  templateUrl: './education-delete.component.html',
  styleUrls: ['./education-delete.component.css']
})
export class EducationDeleteComponent {
  constructor(private title:Title, private route:ActivatedRoute, private workerDescriptionService:WorkerDescriptionService)
  {
    title.setTitle("Удаление данных об образовании")
  }

  education:Education
  educationId:string|null

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.educationId = params.get('id');
      
     
    });

    this.workerDescriptionService.getEducationById(this.educationId).subscribe((responce: Education) => {
     this.education = responce;
    })
  }

  onSubmitDelete() {
    // здесь вы можете отправить данные с помощью HTTP-запроса
    this.workerDescriptionService.deleteEducation(this.educationId, this.education.worker)
   
  }
}
