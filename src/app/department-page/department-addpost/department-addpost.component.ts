import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/models/Department';
import { Post } from 'src/app/models/Post';
import { DepartmentService } from 'src/app/service/department.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-department-addpost',
  templateUrl: './department-addpost.component.html',
  styleUrls: ['./department-addpost.component.css']
})
export class DepartmentAddpostComponent {
   constructor(private title:Title,private departmentService:DepartmentService, private route: ActivatedRoute, private postService:PostService){
    title.setTitle("Добавление должности в отдел")
   }

   department:Department
   departmentId:string|null
   posts:Post[]
   postId:string

   formData = {
    departmentId: 0,
    postId: 0
};

   ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.departmentId = params.get('id');

    });
  
    this.departmentService.getDepartmentById(this.departmentId).subscribe((responce: Department) => {
      this.department = responce;
      this.formData.departmentId = this.department.id
      
    });

    this.postService.getPost().subscribe((responce: Post[]) => {
      this.posts = responce;
      
     })
    


    
  }

  onSubmitAddPost(postId:number) {
     this.formData.postId = postId
    // здесь вы можете отправить данные с помощью HTTP-запроса
    console.log('Данные формы: ', this.formData);
    this.departmentService.addPostOnDepartment(this.formData)
   
  }
}
