import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ExperienceComponent } from './experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SummaryComponent } from './summary/summary.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ResumeComponent,
    AboutmeComponent,
    ExperienceComponent,
    PortfolioComponent,
    SummaryComponent
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
