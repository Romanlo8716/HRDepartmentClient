import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { DepartmentsAndPostsOfWorker } from '../models/DepartmentsAndPostsOfWorker';
import { Department } from '../models/Department';
import { Post } from '../models/Post';
import { DepartmentsAndPostsOfWorkerService } from '../service/deprtmentsandpostsofworker.service';
import { DepartmentService } from '../service/department.service';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  [x: string]: any;
  constructor(private titleService: Title,private departmentsAnsPostsOfWorkerService:DepartmentsAndPostsOfWorkerService,private departmentService:DepartmentService,private postService:PostService) {
    this.titleService.setTitle('Главная страница');
  }

  departmentAndPostsOfWorkers:DepartmentsAndPostsOfWorker[]
  departments:Department[]
  posts:Post[]

  ngOnInit(): void {

    this.departmentsAnsPostsOfWorkerService.getDepartmentsAndPostsOfWorker().subscribe((responce: DepartmentsAndPostsOfWorker[]) => {
      this.departmentAndPostsOfWorkers = responce;
     })

     this.departmentService.getDepartment().subscribe((responce: Department[]) => {
      this.departments = responce;
     })

     this.postService.getPost().subscribe((responce: Post[]) => {
      this.posts = responce;
     })
    }
}
