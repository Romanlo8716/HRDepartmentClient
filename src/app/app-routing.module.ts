import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkerPageComponent } from './worker-page/worker-page.component';
import { HomeComponent } from './home/home.component';
import { DepartmentPageComponent } from './department-page/department-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { AdressofdepartmentPageComponent } from './adressofdepartment-page/adressofdepartment-page.component';
import { WorkerDescriptionPageComponent } from './worker-page/worker-description-page/worker-description-page.component';
import { AdressofdepartmentCreateComponent } from './adressofdepartment-page/adressofdepartment-create/adressofdepartment-create.component';
import { PostCreateComponent } from './post-page/post-create/post-create.component';
import { DepartmentCreateComponent } from './department-page/department-create/department-create.component';
import { WorkerCreateComponent } from './worker-page/worker-create/worker-create.component';
import { DepartmentDeleteComponent } from './department-page/department-delete/department-delete.component';
import { AdressofdepartmentDeleteComponent } from './adressofdepartment-page/adressofdepartment-delete/adressofdepartment-delete.component';
import { PostDeleteComponent } from './post-page/post-delete/post-delete.component';
import { WorkerAllComponent } from './worker-page/worker-all/worker-all.component';
import { WorkerDeleteComponent } from './worker-page/worker-delete/worker-delete.component';
import { WorkerCandidatesComponent } from './worker-page/worker-candidates/worker-candidates.component';
import { WorkerWorkersComponent } from './worker-page/worker-workers/worker-workers.component';
import { WorkerDismissedComponent } from './worker-page/worker-dismissed/worker-dismissed.component';
import { WorkerDismissComponent } from './worker-page/worker-dismiss/worker-dismiss.component';
import { WorkerRecoveryComponent } from './worker-page/worker-recovery/worker-recovery.component';
import { AdressofdepartmentUpdateComponent } from './adressofdepartment-page/adressofdepartment-update/adressofdepartment-update.component';
import { PostUpdateComponent } from './post-page/post-update/post-update.component';
import { DepartmentUpdateComponent } from './department-page/department-update/department-update.component';
import { WorkerUpdateComponent } from './worker-page/worker-update/worker-update.component';
import { AdressofdepartmentDescriptionComponent } from './adressofdepartment-page/adressofdepartment-description/adressofdepartment-description.component';
import { PostDescriptionComponent } from './post-page/post-description/post-description.component';
import { DepartmentDescriptionComponent } from './department-page/department-description/department-description.component';
import { DepartmentAddpostComponent } from './department-page/department-addpost/department-addpost.component';
import { DepartmentChoosepostComponent } from './department-page/department-addpost/department-choosepost/department-choosepost.component';
import { DepartmentUpdatepostComponent } from './department-page/department-updatepost/department-updatepost.component';
import { DepartmentDeletepostComponent } from './department-page/department-deletepost/department-deletepost.component';
import { DepartmentDescriptionpostComponent } from './department-page/department-descriptionpost/department-descriptionpost.component';
import { DepartmentAddworkerComponent } from './department-page/department-addworker/department-addworker.component';
import { DepartmentChooseworkerComponent } from './department-page/department-chooseworker/department-chooseworker.component';
import { DepartmentConfirmworkerComponent } from './department-page/department-confirmworker/department-confirmworker.component';
import { WorkerAddindepartmentComponent } from './worker-page/worker-addindepartment/worker-addindepartment.component';
import { MilitaryAddComponent } from './worker-page/descriptions/military/military-add/military-add.component';
import { LaborbookAddComponent } from './worker-page/descriptions/laborbook/laborbook-add/laborbook-add.component';
import { LaborbookAllComponent } from './worker-page/descriptions/laborbook/laborbook-all/laborbook-all.component';
import { EducationAddComponent } from './worker-page/descriptions/education/education-add/education-add.component';
import { EducationAllComponent } from './worker-page/descriptions/education/education-all/education-all.component';
import { VacationAddComponent } from './worker-page/descriptions/vacation/vacation-add/vacation-add.component';
import { VacationAllComponent } from './worker-page/descriptions/vacation/vacation-all/vacation-all.component';
import { MedicalbookAddComponent } from './worker-page/descriptions/medicalBook/medicalbook-add/medicalbook-add.component';
import { MedicalbookAllComponent } from './worker-page/descriptions/medicalBook/medicalbook-all/medicalbook-all.component';
import { LaborbookDeleteComponent } from './worker-page/descriptions/laborbook/laborbook-delete/laborbook-delete.component';
import { LaborbookUpdateComponent } from './worker-page/descriptions/laborbook/laborbook-update/laborbook-update.component';
import { EducationDeleteComponent } from './worker-page/descriptions/education/education-delete/education-delete.component';
import { EducationUpdateComponent } from './worker-page/descriptions/education/education-update/education-update.component';
import { MedicalbookUpdateComponent } from './worker-page/descriptions/medicalBook/medicalbook-update/medicalbook-update.component';
import { MedicalbookDeleteComponent } from './worker-page/descriptions/medicalBook/medicalbook-delete/medicalbook-delete.component';
import { VacationUpdateComponent } from './worker-page/descriptions/vacation/vacation-update/vacation-update.component';
import { VacationDeleteComponent } from './worker-page/descriptions/vacation/vacation-delete/vacation-delete.component';
import { DepartmentsAndPostsOfWorker } from './models/DepartmentsAndPostsOfWorker';
import { DepartmentandpostsofworkerDeleteComponent } from './worker-page/descriptions/departmentandpostofworker/departmentandpostsofworker-delete/departmentandpostsofworker-delete.component';


const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'worker-page', component: WorkerPageComponent },
  { path: 'worker-page/create', component: WorkerCreateComponent},
  { path: 'worker-page/worker-description-page/:id', component: WorkerDescriptionPageComponent},
  { path: 'worker-page/all', component:WorkerAllComponent},
  { path: 'worker-page/delete/:id', component:WorkerDeleteComponent},
  { path: 'worker-page/candidates', component:WorkerCandidatesComponent},
  { path: 'worker-page/workers', component:WorkerWorkersComponent},
  { path: 'worker-page/dismissed', component:WorkerDismissedComponent},
  { path: 'worker-page/dismiss/:id', component:WorkerDismissComponent},
  { path: 'worker-page/recovery/:id', component:WorkerRecoveryComponent},
  { path: 'worker-page/update/:id', component:WorkerUpdateComponent},
  { path: 'worker-page/addInDepartment/:id', component:WorkerAddindepartmentComponent},
  { path: 'worker-page/military/add/:id', component:MilitaryAddComponent},
  { path: 'worker-page/laborBook/add/:id', component:LaborbookAddComponent},
  { path: 'worker-page/laborBook/all/:id', component:LaborbookAllComponent},
  { path: 'worker-page/laborBook/delete/:id', component:LaborbookDeleteComponent},
  { path: 'worker-page/laborBook/update/:id', component:LaborbookUpdateComponent},
  { path: 'worker-page/education/add/:id', component:EducationAddComponent},
  { path: 'worker-page/education/all/:id', component:EducationAllComponent},
  { path: 'worker-page/education/delete/:id', component:EducationDeleteComponent},
  { path: 'worker-page/education/update/:id', component:EducationUpdateComponent},
  { path: 'worker-page/vacation/add/:id', component:VacationAddComponent},
  { path: 'worker-page/vacation/all/:id', component:VacationAllComponent},
  { path: 'worker-page/vacation/update/:id', component:VacationUpdateComponent},
  { path: 'worker-page/vacation/delete/:id', component:VacationDeleteComponent},
  { path: 'worker-page/medicalBook/add/:id', component:MedicalbookAddComponent},
  { path: 'worker-page/medicalBook/all/:id', component:MedicalbookAllComponent},
  { path: 'worker-page/medicalBook/update/:id', component:MedicalbookUpdateComponent},
  { path: 'worker-page/medicalBook/delete/:id', component:MedicalbookDeleteComponent},
  { path: 'worker-page/departmentsandpostsofworker/delete/:id', component:DepartmentandpostsofworkerDeleteComponent},
  

  { path: 'department-page', component: DepartmentPageComponent },
  { path: 'department-page/create', component: DepartmentCreateComponent},
  { path: 'department-page/delete/:id', component: DepartmentDeleteComponent},
  { path: 'department-page/update/:id', component: DepartmentUpdateComponent},
  { path: 'department-page/description/:id', component: DepartmentDescriptionComponent},
  { path: 'department-page/addPost/:id', component: DepartmentAddpostComponent},
  { path: 'department-page/addPost/ChoosePost/:idDep/:idPost', component: DepartmentChoosepostComponent},
  { path: 'department-page/updatePost/:id', component: DepartmentUpdatepostComponent},
  { path: 'department-page/deletePost/:id', component: DepartmentDeletepostComponent},
  { path: 'department-page/descriptionPost/:id', component: DepartmentDescriptionpostComponent},
  { path: 'department-page/addWorker/:id', component: DepartmentAddworkerComponent},
  { path: 'department-page/addWorker/ChooseWorker/:idDep/:idWorker', component: DepartmentChooseworkerComponent},
  { path: 'department-page/addWorker/ChooseWorker/ConfirmWorker/:idDep/:idWorker/:idPost', component:DepartmentConfirmworkerComponent},

  { path: 'post-page', component: PostPageComponent },
  { path: 'post-page/create', component: PostCreateComponent}, 
  { path: 'post-page/delete/:id',component: PostDeleteComponent},
  { path: 'post-page/update/:id', component: PostUpdateComponent},
  { path: 'post-page/description/:id', component: PostDescriptionComponent},

  { path: 'adressofdepartment-page', component: AdressofdepartmentPageComponent},
  { path: 'adressofdepartment-page/create', component: AdressofdepartmentCreateComponent},
  { path: 'adressofdepartment-page/delete/:id', component: AdressofdepartmentDeleteComponent},
  { path: 'adressofdepartment-page/update/:id', component: AdressofdepartmentUpdateComponent},
  { path: 'adressofdepartment-page/description/:id', component:AdressofdepartmentDescriptionComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
