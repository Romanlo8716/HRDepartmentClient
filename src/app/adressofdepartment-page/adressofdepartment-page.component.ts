import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AdressOfDepartment } from '../models/AdressOfDepartment';
import { AdressOfDepartmentService } from '../service/adressofdepartment.service';


@Component({
  selector: 'app-adressofdepartment-page',
  templateUrl: './adressofdepartment-page.component.html',
  styleUrls: ['./adressofdepartment-page.component.css']
})
export class AdressofdepartmentPageComponent {
    constructor(private adressOfDepartmentService : AdressOfDepartmentService, private titleService: Title){
      this.titleService.setTitle("Адреса отделов");
    }

    adressOfDepartments: AdressOfDepartment[];

ngOnInit(): void{
 this.adressOfDepartmentService.getAdressOfDepartment().subscribe((responce: AdressOfDepartment[]) => {
  this.adressOfDepartments = responce;
 })

}
}
