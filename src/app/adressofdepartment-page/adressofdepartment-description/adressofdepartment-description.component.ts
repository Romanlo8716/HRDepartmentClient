import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AdressOfDepartment } from 'src/app/models/AdressOfDepartment';
import { AdressOfDepartmentService } from 'src/app/service/adressofdepartment.service';

@Component({
  selector: 'app-adressofdepartment-description',
  templateUrl: './adressofdepartment-description.component.html',
  styleUrls: ['./adressofdepartment-description.component.css']
})
export class AdressofdepartmentDescriptionComponent {
   constructor(private adressofdepartmentService:AdressOfDepartmentService, private route: ActivatedRoute,private title:Title){
    title.setTitle("Адрес отдела")
   }

   adressofdepartment:AdressOfDepartment
   adressofdepartmentId:string|null

   ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.adressofdepartmentId = params.get('id');
      
     
    });

    this.adressofdepartmentService.getAdressOfDepartmentById(this.adressofdepartmentId).subscribe((responce: AdressOfDepartment) => {
     this.adressofdepartment = responce;
    })

   }

}
