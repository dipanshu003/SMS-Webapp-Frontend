import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStudentComponent } from './components/all-student/all-student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddRelativesComponent } from './components/add-relatives/add-relatives.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';

const routes: Routes = [
  
  {path:"",redirectTo:"all-student",pathMatch:"full"},
  {path:"all-student",component:AllStudentComponent},
  {path:"add-student",component:AddStudentComponent},
  {path:"add-relatives",component:AddRelativesComponent},
  {path:"edit-student/:id",component:EditStudentComponent},
  {path:"student-details/:id",component:StudentDetailsComponent},
  {path:"**",component:NotFoundComponent},
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
