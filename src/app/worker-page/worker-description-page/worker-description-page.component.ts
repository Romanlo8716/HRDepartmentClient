import { Component,ElementRef,OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { WorkerDescriptionService } from '../../service/workerdescription.service';
import { Worker } from '../../models/Worker';
import { ActivatedRoute, NavigationExtras, Route, Router } from '@angular/router';
import { DescroptionWorker } from '../../models/DescriptionWorker';
import { LaborBook } from '../../models/LaborBook';
import { Education } from '../../models/Education';
import { Vacation } from '../../models/Vacation';
import { MedicalBook } from '../../models/MedicalBook';
import { DepartmentsAndPostsOfWorker } from '../../models/DepartmentsAndPostsOfWorker';

@Component({
  selector: 'app-worker-description-page',
  templateUrl: './worker-description-page.component.html',
  styleUrls: ['./worker-description-page.component.css']
})




export class WorkerDescriptionPageComponent {
  constructor(private elementRef: ElementRef,private route: ActivatedRoute, private workerDescriptionService: WorkerDescriptionService, private titleService: Title) {
    this.titleService.setTitle('Сотрудник');
  }

  worker: Worker;
  workerId:string|null;
  descriptionWorkerLaborBooks: LaborBook[];
  descriptionWorkerEducations: Education[];
  descriptionWorkerVacations: Vacation[];
  descriptionWorkerMedicalBooks: MedicalBook[];
  descriptionWorkerDepartmentsAndPosts: DepartmentsAndPostsOfWorker[];
  router: Router;
  
  scrollToElement($element: any): void {
    $element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.workerId = params.get('id');
      
     
    });

    this.workerDescriptionService.getWorkerById(this.workerId).subscribe((responce: Worker) => {
     this.worker = responce;
    })

    this.workerDescriptionService.getDescriptionWorkerLaborBooks(this.workerId).subscribe((response: LaborBook[]) => {
      this.descriptionWorkerLaborBooks = response;
     })

     this.workerDescriptionService.getDescriptionWorkerEducations(this.workerId).subscribe((response: Education[]) => {
      this.descriptionWorkerEducations = response;
     })

     this.workerDescriptionService.getDescriptionWorkerVacations(this.workerId).subscribe((response: Vacation[]) => {
      this.descriptionWorkerVacations = response;
     })

     this.workerDescriptionService.getDescriptionWorkerMedicalBooks(this.workerId).subscribe((response: MedicalBook[]) => {
      this.descriptionWorkerMedicalBooks = response;
     })
   
     this.workerDescriptionService.getDescriptionWorkerDepartmentsAndPosts(this.workerId).subscribe((response: DepartmentsAndPostsOfWorker[]) => {
      this.descriptionWorkerDepartmentsAndPosts = response;
     })

   
  
   }

   
}

