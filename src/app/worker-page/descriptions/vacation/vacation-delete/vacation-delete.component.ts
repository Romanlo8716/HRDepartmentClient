import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Vacation } from 'src/app/models/Vacation';
import { WorkerDescriptionService } from 'src/app/service/workerdescription.service';
import { Worker } from 'src/app/models/Worker';

@Component({
  selector: 'app-vacation-delete',
  templateUrl: './vacation-delete.component.html',
  styleUrls: ['./vacation-delete.component.css']
})
export class VacationDeleteComponent {
  constructor(private title:Title, private route:ActivatedRoute, private workerDescriptionService:WorkerDescriptionService)
  {
    title.setTitle("Удаление данных об отпусках")
  }

  vacatoin:Vacation
  vacationId:string|null

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.vacationId = params.get('id');
      
     
    });

    this.workerDescriptionService.getVacationById(this.vacationId).subscribe((responce: Vacation) => {
     this.vacatoin = responce;
    })
  }

  onSubmitDelete() {
    // здесь вы можете отправить данные с помощью HTTP-запроса
    this.workerDescriptionService.deleteVacation(this.vacationId, this.vacatoin.worker)
   
  }
}
