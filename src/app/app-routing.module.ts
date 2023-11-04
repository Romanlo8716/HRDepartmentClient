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

  { path: 'department-page', component: DepartmentPageComponent },
  { path: 'department-page/create', component: DepartmentCreateComponent},
  { path: 'department-page/delete/:id', component: DepartmentDeleteComponent},

  { path: 'post-page', component: PostPageComponent },
  { path: 'post-page/create', component: PostCreateComponent}, 
  { path: 'post-page/delete/:id',component: PostDeleteComponent},

  { path: 'adressofdepartment-page', component: AdressofdepartmentPageComponent},
  { path: 'adressofdepartment-page/create', component: AdressofdepartmentCreateComponent},
  { path: 'adressofdepartment-page/delete/:id', component: AdressofdepartmentDeleteComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
