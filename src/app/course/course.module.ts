import { AppPipeModule } from '../shared/pipe/app-pipe.module';
import { StarModule } from '../shared/component/star/star.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CourseInfoComponent } from './../course-info/course-info.component';
import { CoursesListComponent } from "./course-list.component";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CoursesListComponent,
    CourseInfoComponent
  ],
  imports: [
    AppPipeModule,
    CommonModule,
    FormsModule,
    StarModule,    
    RouterModule.forChild([
      { path: 'courses', component: CoursesListComponent },
      { path: 'courses/info/:id', component: CourseInfoComponent},          
    ]),
  ]
})
export class CourseModule { }
