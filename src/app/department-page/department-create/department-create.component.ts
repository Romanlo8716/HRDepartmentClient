import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AdressOfDepartment } from 'src/app/models/AdressOfDepartment';
import { AdressOfDepartmentService } from 'src/app/service/adressofdepartment.service';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.css']
})
export class DepartmentCreateComponent {
   constructor(private departmentService:DepartmentService, private adressOfDepartmentService:AdressOfDepartmentService, private title:Title){
    title.setTitle("Добавление отдела компании")
   }

   adressOfDepartments: AdressOfDepartment[];

   formData = {
    nameDepartment: '',
    phoneNumber: '',
    adressOfDepartment: {
      id: '',
      city: '',
      street: '',
      house: ''
    }
};

   ngOnInit(): void{
    this.adressOfDepartmentService.getAdressOfDepartment().subscribe((responce: AdressOfDepartment[]) => {
     this.adressOfDepartments = responce;
    })
   
   }

   onSubmit() {
    // здесь вы можете отправить данные с помощью HTTP-запроса
    console.log('Данные формы: ', this.formData);
    this.departmentService.createDepartment(this.formData)
   
  }
}
