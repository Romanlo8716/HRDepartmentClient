import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AdressOfDepartmentService } from 'src/app/service/adressofdepartment.service';
import { Http } from '@angular/http';


@Component({
  selector: 'app-adressofdepartment-create',
  templateUrl: './adressofdepartment-create.component.html',
  styleUrls: ['./adressofdepartment-create.component.css']
})
export class AdressofdepartmentCreateComponent {

  constructor(private adressOfDepartmentService : AdressOfDepartmentService, private titleService: Title){
    this.titleService.setTitle("Добавление адреса отдела");
  }

  formData = {
    city: '',
    street: '',
    house: ''
};

onSubmit() {
  // здесь вы можете отправить данные с помощью HTTP-запроса
  console.log('Данные формы: ', this.formData);
  this.adressOfDepartmentService.createAdressOfDepartment(this.formData)
 
}
}
