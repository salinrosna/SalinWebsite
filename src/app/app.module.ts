import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ResumeComponent } from './resume/resume.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ResumeComponent,
  ],
  imports: [
    
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'',redirectTo:'home', pathMatch:'full'
      },
      // {
      // path:'home',
      // component:HomeComponent
      // },
      {
      path:'resume',
      component:ResumeComponent
      } 
    ])
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
