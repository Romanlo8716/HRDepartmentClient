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
    DepartmentDescriptionComponent
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
