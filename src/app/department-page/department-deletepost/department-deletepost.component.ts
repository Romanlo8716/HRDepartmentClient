import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PostOfDepartment } from 'src/app/models/PostOfDepartment';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-department-deletepost',
  templateUrl: './department-deletepost.component.html',
  styleUrls: ['./department-deletepost.component.css']
})
export class DepartmentDeletepostComponent {
  constructor(private departmentService:DepartmentService, private route: ActivatedRoute,private title:Title){
    title.setTitle("Удаление должности из отдела")
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

  onSubmitDeletePost() {
    // здесь вы можете отправить данные с помощью HTTP-запроса
    this.departmentService.deletePostOfDepartment(this.postOfDepartmentId, this.postOfDepartment)
   
  }
}
