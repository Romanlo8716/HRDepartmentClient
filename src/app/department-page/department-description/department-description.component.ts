import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AdressOfDepartment } from 'src/app/models/AdressOfDepartment';
import { Department } from 'src/app/models/Department';
import { DepartmentsAndPostsOfWorker } from 'src/app/models/DepartmentsAndPostsOfWorker';
import { PostOfDepartment } from 'src/app/models/PostOfDepartment';
import { DepartmentService } from 'src/app/service/department.service';
import { DepartmentsAndPostsOfWorkerService } from 'src/app/service/deprtmentsandpostsofworker.service';
import { ScriptService } from 'src/app/service/script.service';


@Component({
  selector: 'app-department-description',
  templateUrl: './department-description.component.html',
  styleUrls: ['./department-description.component.css']
})
export class DepartmentDescriptionComponent {
  constructor(private departmentService:DepartmentService, private route: ActivatedRoute,private title:Title, private scriptService:ScriptService, private departmentsAndPostsOfWorkerService:DepartmentsAndPostsOfWorkerService ){
    title.setTitle("Отдел")

   }

   department:Department
   departmentId:string|null
   address:string
   postOfDepartments:PostOfDepartment[]
   open:number
   close:number
   depAndPostsOfWorker:DepartmentsAndPostsOfWorker[];



   ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.departmentId = params.get('id');
    });

    this.departmentService.getPostOfDepartment().subscribe((responce: PostOfDepartment[]) => {
      this.postOfDepartments = responce;
     })

     this.departmentsAndPostsOfWorkerService.getDepartmentsAndPostsOfWorker().subscribe((responce: DepartmentsAndPostsOfWorker[]) => {
      this.depAndPostsOfWorker = responce;
     })


  
    this.departmentService.getDepartmentById(this.departmentId).subscribe((responce: Department) => {
      this.department = responce;

      this.address = this.department.adressOfDepartment.city + ", " + this.department.adressOfDepartment.street + ", " + this.department.adressOfDepartment.house;
    console.log(this.address);


     this.scriptService.loadScript(
      'https://api-maps.yandex.ru/2.1/?apikey=3d7dc5c5-e1ba-4602-85e9-09ebd053ec6c&lang=ru_RU',
      'ymaps',
      () => {
        ymaps.ready(() => {
          this.init();
        });
      }
    );

    });


    
  }


  init():any {
    var myMap = new ymaps.Map('map', {
      center: [55.74, 37.58],
      zoom: 13,
      controls: []
      });
  
  
      var searchControl = new ymaps.control.SearchControl({
      options: {
      provider: 'yandex#search'
      }
      });
  
      myMap.controls.add(searchControl);
  
  
      searchControl.search(this.address);
  }

  closePlace(postOfDep:PostOfDepartment, depAndPost:DepartmentsAndPostsOfWorker[]):number{

     for(const item of depAndPost){
      if(postOfDep.post.id==item.post.id){
        this.close++;
      }
     }
     if(depAndPost.length ==0){
      this.close=0;
     }
     return this.close;
  }

  openPlace(all:number,close:number):number{
     this.open=all-close;
     return this.open;
  }
}


