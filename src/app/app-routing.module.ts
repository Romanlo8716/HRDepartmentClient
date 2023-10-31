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


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'worker-page', component: WorkerPageComponent },
  { path: 'department-page', component: DepartmentPageComponent },
  { path: 'post-page', component: PostPageComponent },
  { path: 'adressofdepartment-page', component: AdressofdepartmentPageComponent},
  { path: 'worker-page/worker-description-page/:id', component: WorkerDescriptionPageComponent},
  { path: 'adressofdepartment-page/create', component: AdressofdepartmentCreateComponent},
  { path: 'post-page/create', component: PostCreateComponent},
  { path: 'department-page/create', component: DepartmentCreateComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
