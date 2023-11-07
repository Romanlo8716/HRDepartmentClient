import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AdressOfDepartment } from 'src/app/models/AdressOfDepartment';
import { Department } from 'src/app/models/Department';
import { AdressOfDepartmentService } from 'src/app/service/adressofdepartment.service';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-department-update',
  templateUrl: './department-update.component.html',
  styleUrls: ['./department-update.component.css']
})
export class DepartmentUpdateComponent {
  constructor(private adressofdepartmentService:AdressOfDepartmentService,private departmentService:DepartmentService, private route: ActivatedRoute,private title:Title){
    title.setTitle("Изменение отдел")
   }

   department: Department
  departmentId:String|null
  adressOfDepartments: AdressOfDepartment[];
  adressOfDepartmentsSort: AdressOfDepartment[];

  formData = {
    id: '',
   nameDepartment: '',
   phoneNumber: '',
   adressOfDepartment: {
    id: 0,
    city: '',
    street: '',
    house: ''
  }
};



  ngOnInit(): void{

    this.adressofdepartmentService.getAdressOfDepartment().subscribe((responce: AdressOfDepartment[]) => {
      this.adressOfDepartments = responce;
     })

    this.route.paramMap.subscribe(params => {
      this.departmentId = params.get('id');
      
     
    });

    this.departmentService.getDepartmentById(this.departmentId).subscribe((responce: Department) => {
     this.department = responce;
     this.formData.nameDepartment = this.department.nameDepartment
     this.formData.phoneNumber = this.department.phoneNumber
     this.formData.adressOfDepartment.id = this.department.adressOfDepartment.id
     this.formData.adressOfDepartment.city = this.department.adressOfDepartment.city
     this.formData.adressOfDepartment.street = this.department.adressOfDepartment.street
     this.formData.adressOfDepartment.house = this.department.adressOfDepartment.house

    })

   }

   onSubmitUpdate() {
    // здесь вы можете отправить данные с помощью HTTP-запроса
    this.departmentService.updateDepartment(this.departmentId,this.formData)
   
  }

  onSortAdressOfDepartment(department:Department, adressOfDepartments:AdressOfDepartment[]):AdressOfDepartment[]{
        this.adressOfDepartmentsSort=[];

        for(const item of adressOfDepartments){
           if(department.adressOfDepartment.id==item.id){
            continue
           }
           this.adressOfDepartmentsSort.push(item);
        }

        return this.adressOfDepartmentsSort
  }
}
