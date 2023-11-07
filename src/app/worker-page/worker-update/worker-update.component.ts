import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { WorkerService } from 'src/app/service/worker.service';
import { Worker } from 'src/app/models/Worker';
import { NgbDateStructAdapter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-worker-update',
  templateUrl: './worker-update.component.html',
  styleUrls: ['./worker-update.component.css']
})
export class WorkerUpdateComponent {
  constructor(private workerService:WorkerService, private route: ActivatedRoute,private title:Title){
    title.setTitle("Изменение сотрудника")
   
   }

   worker: Worker
  workerId:String|null
  dateString:String

  formData = {
    id:'',
    name: '',
    surname: '',
    patronymic: '',
    phone: '',
    dateOfBirth: '',
    city: '',
    street: '',
    house: '',
    familyPosition: '',
    countChildren:0,
    email: '',
    seriesPass: 0,
    numberPass: 0,
    issuedByWhom: '',
    dateOfIssue: '',
    divisionCode: '',
    numberSnils: 0,
    numberInn: 0,
    gender: '',
    militaryTitle: '',
    shelfLife: '',
    stockCategory: 0,
    profile: '',
    vus: '',
    nameKomis: '',
    photo: '',
    descriptionWorker: '',
    dismiss: false,
};



  ngOnInit(): void{


    this.route.paramMap.subscribe(params => {
      this.workerId = params.get('id');
      
     
    });

    this.workerService.getWorkerById(this.workerId).subscribe((responce: Worker) => {
     this.worker = responce;
     this.formData.name = this.worker.name
     this.formData.surname = this.worker.surname
     this.formData.patronymic = this.worker.patronymic
     this.formData.phone = this.worker.phone
     this.formData.dateOfBirth = this.formatDate(this.worker.dateOfBirth);
     this.formData.city = this.worker.city
     this.formData.street = this.worker.street
     this.formData.house = this.worker.house
     this.formData.familyPosition = this.worker.familyPosition
     this.formData.countChildren = this.worker.countChildren
     this.formData.email = this.worker.email
     this.formData.seriesPass = this.worker.seriesPass
     this.formData.numberPass = this.worker.numberPass
     this.formData.issuedByWhom = this.worker.issuedByWhom
     this.formData.dateOfIssue = this.formatDate(this.worker.dateOfIssue);
     this.formData.divisionCode = this.worker.divisionCode
     this.formData.numberSnils = this.worker.numberSnils
     this.formData.numberInn = this.worker.numberInn
     this.formData.gender = this.worker.gender
     this.formData.militaryTitle = this.worker.militaryTitle
     this.formData.shelfLife = this.worker.shelfLife
     this.formData.stockCategory = this.worker.stockCategory
     this.formData.profile = this.worker.profile
     this.formData.vus = this.worker.vus
     this.formData.nameKomis = this.worker.nameKomis
     this.formData.photo = this.worker.photo
     this.formData.descriptionWorker = this.worker.descriptionWorker
     this.formData.dismiss = this.worker.dismiss


    })

   }

   onSubmitUpdate() {
    // здесь вы можете отправить данные с помощью HTTP-запроса
    this.workerService.updateWorker(this.workerId,this.formData)
   
  }

  onGender(worker:Worker):string{
    if(worker.gender=="Мужской"){
      return "Женский"
    }
    else{
      return "Мужской"
    }
  }

  onFamilyPosition(worker:Worker):string{
    if(worker.familyPosition=="В браке"){
      return "Не в браке"
    }
    else{
      return "В браке"
    }
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
