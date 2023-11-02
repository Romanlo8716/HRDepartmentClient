import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/models/Department';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-department-delete',
  templateUrl: './department-delete.component.html',
  styleUrls: ['./department-delete.component.css']
})
export class DepartmentDeleteComponent {
  constructor(private departmentService:DepartmentService, private route: ActivatedRoute,private title:Title){
    title.setTitle("Удаление отдела")
  }

  department: Department
  departmentId:String|null

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.departmentId = params.get('id');
      
     
    });

    this.departmentService.getDepartmentById(this.departmentId).subscribe((responce: Department) => {
     this.department = responce;
    })

   }

   onSubmitDelete() {
    // здесь вы можете отправить данные с помощью HTTP-запроса
    this.departmentService.deleteDepartment(this.departmentId)
   
  }
}
