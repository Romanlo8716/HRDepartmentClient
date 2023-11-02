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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
