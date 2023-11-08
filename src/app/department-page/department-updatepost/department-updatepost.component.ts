import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DepartmentsAndPostsOfWorker } from 'src/app/models/DepartmentsAndPostsOfWorker';
import { PostOfDepartment } from 'src/app/models/PostOfDepartment';
import { DepartmentService } from 'src/app/service/department.service';
import { DepartmentsAndPostsOfWorkerService } from 'src/app/service/deprtmentsandpostsofworker.service';

@Component({
  selector: 'app-department-updatepost',
  templateUrl: './department-updatepost.component.html',
  styleUrls: ['./department-updatepost.component.css']
})
export class DepartmentUpdatepostComponent {
  constructor(private departmentService:DepartmentService, private route: ActivatedRoute,private title:Title, private departmentsAndPostsOfWorkerService:DepartmentsAndPostsOfWorkerService){
    title.setTitle("Изменение количества должностей")
   }

   postOfDeartment:PostOfDepartment
   postOfDepartmentId:string|null
   close:number
   depAndPostsOfWorker:DepartmentsAndPostsOfWorker[];
   size:number

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

   ngOnInit(): void{

   
    this.route.paramMap.subscribe(params => {
      this.postOfDepartmentId = params.get('id');
      
     
    });

    this.departmentService.getPostOfDepartmentById(this.postOfDepartmentId).subscribe((responce: PostOfDepartment) => {
     this.postOfDeartment = responce;
    this.formData.post.id = this.postOfDeartment.post.id
    this.formData.department.id = this.postOfDeartment.department.id
    this.formData.count = this.postOfDeartment.count

    })

    this.departmentsAndPostsOfWorkerService.getDepartmentsAndPostsOfWorker().subscribe((responce: DepartmentsAndPostsOfWorker[]) => {
      this.depAndPostsOfWorker = responce;
      this.size = this.depAndPostsOfWorker.length
     })

   }

   onSubmitUpdatePost() {
    // здесь вы можете отправить данные с помощью HTTP-запроса
    this.departmentService.updatePostOfDepartment(this.postOfDepartmentId,this.formData)
   
  }


 closePlace(postOfDep:PostOfDepartment, depAndPost:DepartmentsAndPostsOfWorker[]):number{
  this.close =0
  if(this.size ==null){
    this.close=0;
   }
   else{
    for(const item of depAndPost){
      if(postOfDep.post.id==item.post.id){
        this.close++;
      }
     }
   }
  
     
     return this.close;
  }
}
