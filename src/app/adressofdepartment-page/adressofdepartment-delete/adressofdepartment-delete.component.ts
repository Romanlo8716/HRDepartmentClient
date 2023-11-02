import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AdressOfDepartment } from 'src/app/models/AdressOfDepartment';
import { AdressOfDepartmentService } from 'src/app/service/adressofdepartment.service';

@Component({
  selector: 'app-adressofdepartment-delete',
  templateUrl: './adressofdepartment-delete.component.html',
  styleUrls: ['./adressofdepartment-delete.component.css']
})
export class AdressofdepartmentDeleteComponent {
constructor(private adressofdepartmentService:AdressOfDepartmentService, private route: ActivatedRoute,private title:Title){
  title.setTitle("Удаление адреса отдела")
}

adressofdepartment: AdressOfDepartment
  adressofdepartmentId:String|null

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.adressofdepartmentId = params.get('id');
      
     
    });

    this.adressofdepartmentService.getAdressOfDepartmentById(this.adressofdepartmentId).subscribe((responce: AdressOfDepartment) => {
     this.adressofdepartment = responce;
    })

   }

   onSubmitDelete() {
    // здесь вы можете отправить данные с помощью HTTP-запроса
    this.adressofdepartmentService.deleteAdressOfDepartment(this.adressofdepartmentId)
   
  }
}
