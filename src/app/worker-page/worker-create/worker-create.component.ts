import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { WorkerService } from 'src/app/service/worker.service';

@Component({
  selector: 'app-worker-create',
  templateUrl: './worker-create.component.html',
  styleUrls: ['./worker-create.component.css']
})
export class WorkerCreateComponent {
     constructor(private workerService: WorkerService, private title:Title){
      title.setTitle("Добление сотрудника")
     }

     formData = {
      name: '',
      surname: '',
      patronymic: '',
      phone: '',
      dateOfBirth: '',
      city: '',
      street: '',
      house: '',
      familyPosition: '',
      countChildren: '',
      email: '',
      seriesPass: '',
      numberPass: '',
      issuedByWhom: '',
      dateOfIssue: '',
      divisionCode: '',
      numberSnils: '',
      numberInn: '',
      gender: '',
      militaryTitle: '',
      shelfLife: '',
      stockCategory: '',
      profile: '',
      vus: '',
      nameKomis: '',
      photo: '',
      descriptionWorker: '',
      dismiss: '',
      departments: '',
      posts: '',
  };
  
  onSubmit() {
    // здесь вы можете отправить данные с помощью HTTP-запроса
    console.log('Данные формы: ', this.formData);
    this.workerService.createWorker(this.formData)
   
  }
}
