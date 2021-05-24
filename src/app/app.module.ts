import { Error404Component } from './core/component/error404/error404.component';
import { CoreModule } from './core/component/core.module';
import { CourseModule } from './course/course.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent        
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CourseModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'courses', pathMatch: 'full' },
      { path: '**', component: Error404Component  }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
