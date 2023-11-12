import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Worker } from 'src/app/models/Worker';
import { WorkerService } from 'src/app/service/worker.service';
import { WorkerDescriptionService } from 'src/app/service/workerdescription.service';

@Component({
  selector: 'app-military-add',
  templateUrl: './military-add.component.html',
  styleUrls: ['./military-add.component.css']
})
export class MilitaryAddComponent {
  constructor(private route: ActivatedRoute, private workerDescriprionService:WorkerDescriptionService,private workerService:WorkerService, private titleService: Title) {
    this.titleService.setTitle('Добавление данных военного билета');
  }

  worker:Worker
  workerId:string|null

  formData={
    id:0,
    militaryTitle:'',
    shelfLife:'',
    stockCategory:0,
    profile:'',
    vus:'',
    nameKomis:''
  }

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.workerId = params.get('id');
      
     
    });

    this.workerService.getWorkerById(this.workerId).subscribe((responce: Worker) => {
     this.worker = responce;
     this.formData.militaryTitle = this.worker.militaryTitle
     this.formData.shelfLife = this.worker.shelfLife
     this.formData.stockCategory = this.worker.stockCategory
     this.formData.profile = this.worker.profile
     this.formData.vus = this.worker.vus
     this.formData.nameKomis = this.worker.nameKomis
    })

  }

  onSubmitMilitary() {
    
   // здесь вы можете отправить данные с помощью HTTP-запроса
   console.log('Данные формы: ', this.formData);
   this.workerDescriprionService.addMilitary(this.worker.id, this.formData)
  
 }
}
