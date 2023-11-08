import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PostOfDepartment } from 'src/app/models/PostOfDepartment';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-department-descriptionpost',
  templateUrl: './department-descriptionpost.component.html',
  styleUrls: ['./department-descriptionpost.component.css']
})
export class DepartmentDescriptionpostComponent {
  constructor(private departmentService:DepartmentService, private route: ActivatedRoute,private title:Title){
    title.setTitle("Описание вакансии в отделе")
   }

   postOfDepartment:PostOfDepartment
   postOfDepartmentId:string|null

   ngOnInit(): void{

   
    this.route.paramMap.subscribe(params => {
      this.postOfDepartmentId = params.get('id');
      
     
    });

    this.departmentService.getPostOfDepartmentById(this.postOfDepartmentId).subscribe((responce: PostOfDepartment) => {
     this.postOfDepartment = responce;
   

    })
  }
}
