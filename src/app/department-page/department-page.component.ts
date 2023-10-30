import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { Department } from '../models/Department';
import { DepartmentService } from '../service/department.service';
import { Worker } from '../models/Worker';

@Component({
  selector: 'app-department-page',
  templateUrl: './department-page.component.html',
  styleUrls: ['./department-page.component.css']
})
export class DepartmentPageComponent {
   constructor(private departmentService: DepartmentService, private titleService: Title) {
    this.titleService.setTitle('Отделы');
   }

   departments: Department[];

ngOnInit(): void{
 this.departmentService.getDepartment().subscribe((responce: Department[]) => {
  this.departments = responce;
 })

}
}
