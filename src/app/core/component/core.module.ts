import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ 
    NavBarComponent
   ],
  imports: [
    RouterModule
  ],
  exports: [ NavBarComponent ]
})
export class CoreModule { }
