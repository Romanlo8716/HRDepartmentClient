import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/models/Department';
import { Post } from 'src/app/models/Post';
import { DepartmentService } from 'src/app/service/department.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-department-choosepost',
  templateUrl: './department-choosepost.component.html',
  styleUrls: ['./department-choosepost.component.css']
})
export class DepartmentChoosepostComponent {
  constructor(private title:Title,private departmentService:DepartmentService, private route: ActivatedRoute, private postService:PostService){
    title.setTitle("Добавление должности в отдел")
   }

   idDep: string|null;
  idPost: string|null;
  department:Department
  post:Post

  formData = {
    department:{
       id: 0,
       nameDepartment: '',
       phoneNumber:'',
       adressOfDepartment:{
        id: 0,
        city:'',
        street:'',
        house:''
       }
    },
    post: {
      id: 0,
      salary:'',
      namePost:''
    },
    count: 0
};

   ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idDep = params.get('idDep');
      this.idPost = params.get('idPost');
    });


    this.departmentService.getDepartmentById(this.idDep).subscribe((responce: Department) => {
      this.department = responce;
      this.formData.department.id=this.department.id
    });

    this.postService.getPostById(this.idPost).subscribe((responce: Post) => {
      this.post = responce;
      this.formData.post.id = this.post.id
    });
  }

  onSubmitAddPost() {

   // здесь вы можете отправить данные с помощью HTTP-запроса
   console.log('Данные формы: ', this.formData);
   this.departmentService.createPostOnDepartment(this.formData)
  
 }
}
