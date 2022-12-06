import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';

const routes: Routes = [
  {path:"",component:AddCourseComponent},
  {path:"view",component:ViewCoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
