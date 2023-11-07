import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AdressOfDepartment } from 'src/app/models/AdressOfDepartment';
import { AdressOfDepartmentService } from 'src/app/service/adressofdepartment.service';

@Component({
  selector: 'app-adressofdepartment-update',
  templateUrl: './adressofdepartment-update.component.html',
  styleUrls: ['./adressofdepartment-update.component.css']
})
export class AdressofdepartmentUpdateComponent {
   constructor(private adressofdepartmentService:AdressOfDepartmentService, private route: ActivatedRoute,private title:Title){
    title.setTitle("Изменение адреса отделов")
   }

   adressofdepartment: AdressOfDepartment
  adressofdepartmentId:String|null

  formData = {
    id: '',
    city: '',
    street: '',
    house: ''
};



  ngOnInit(): void{


    this.route.paramMap.subscribe(params => {
      this.adressofdepartmentId = params.get('id');
      
     
    });

    this.adressofdepartmentService.getAdressOfDepartmentById(this.adressofdepartmentId).subscribe((responce: AdressOfDepartment) => {
     this.adressofdepartment = responce;
     this.formData.city = this.adressofdepartment.city
     this.formData.street = this.adressofdepartment.street
     this.formData.house = this.adressofdepartment.house

    })

   }

   onSubmitUpdate() {
    // здесь вы можете отправить данные с помощью HTTP-запроса
    this.adressofdepartmentService.updateAdressOfDepartment(this.adressofdepartmentId,this.formData)
   
  }

}
