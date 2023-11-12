import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WorkerPageComponent } from './worker-page/worker-page.component';
import { HomeComponent } from './home/home.component';
import { DepartmentPageComponent } from './department-page/department-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { AdressofdepartmentPageComponent } from './adressofdepartment-page/adressofdepartment-page.component';
import { WorkerDescriptionPageComponent } from './worker-page/worker-description-page/worker-description-page.component';
import { AdressofdepartmentCreateComponent } from './adressofdepartment-page/adressofdepartment-create/adressofdepartment-create.component';
import { FormsModule } from '@angular/forms';
import { PostCreateComponent } from './post-page/post-create/post-create.component';
import { DepartmentCreateComponent } from './department-page/department-create/department-create.component';
import { WorkerCreateComponent } from './worker-page/worker-create/worker-create.component';
import { DepartmentDeleteComponent } from './department-page/department-delete/department-delete.component';
import { AdressofdepartmentDeleteComponent } from './adressofdepartment-page/adressofdepartment-delete/adressofdepartment-delete.component';
import { PostDeleteComponent } from './post-page/post-delete/post-delete.component';
import { WorkerDeleteComponent } from './worker-page/worker-delete/worker-delete.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkerAllComponent } from './worker-page/worker-all/worker-all.component';
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
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';
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
import { DepartmentandpostsofworkerDeleteComponent } from './worker-page/descriptions/departmentandpostofworker/departmentandpostsofworker-delete/departmentandpostsofworker-delete.component';

const mapConfig: YaConfig = {
  apikey: '3d7dc5c5-e1ba-4602-85e9-09ebd053ec6c',
  lang: 'ru_RU',
};


@NgModule({
  declarations: [
    AppComponent,
    WorkerPageComponent,
    HomeComponent,
    DepartmentPageComponent,
    PostPageComponent,
    AdressofdepartmentPageComponent,
    WorkerDescriptionPageComponent,
    AdressofdepartmentCreateComponent,
    PostCreateComponent,
    DepartmentCreateComponent,
    WorkerCreateComponent,
    DepartmentDeleteComponent,
    AdressofdepartmentDeleteComponent,
    PostDeleteComponent,
    WorkerDeleteComponent,
    WorkerAllComponent,
    WorkerCandidatesComponent,
    WorkerWorkersComponent,
    WorkerDismissedComponent,
    WorkerDismissComponent,
    WorkerRecoveryComponent,
    AdressofdepartmentUpdateComponent,
    PostUpdateComponent,
    DepartmentUpdateComponent,
    WorkerUpdateComponent,
    AdressofdepartmentDescriptionComponent,
    PostDescriptionComponent,
    DepartmentDescriptionComponent,
    DepartmentAddpostComponent,
    DepartmentChoosepostComponent,
    DepartmentUpdatepostComponent,
    DepartmentDeletepostComponent,
    DepartmentDescriptionpostComponent,
    DepartmentAddworkerComponent,
    DepartmentChooseworkerComponent,
    DepartmentConfirmworkerComponent,
    WorkerAddindepartmentComponent,
    MilitaryAddComponent,
    LaborbookAddComponent,
    LaborbookAllComponent,
    EducationAddComponent,
    EducationAllComponent,
    VacationAddComponent,
    VacationAllComponent,
    MedicalbookAddComponent,
    MedicalbookAllComponent,
    LaborbookDeleteComponent,
    LaborbookUpdateComponent,
    EducationDeleteComponent,
    EducationUpdateComponent,
    MedicalbookUpdateComponent,
    MedicalbookDeleteComponent,
    VacationUpdateComponent,
    VacationDeleteComponent,
    DepartmentandpostsofworkerDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    AngularYandexMapsModule.forRoot(mapConfig)
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
