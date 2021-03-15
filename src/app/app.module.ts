import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionContainerComponent } from './components/section-container/section-container.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { LibrariesComponent } from './components/libraries/libraries.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WorkComponent } from './components/work/work.component';
import { HttpClientModule } from '@angular/common/http';

import '@cds/core/alert/register.js';
import { TimelineCardComponent } from './components/resume/timeline-card/timeline-card.component';
@NgModule({
  declarations: [
    AppComponent,
    SectionContainerComponent,
    AboutComponent,
    ResumeComponent,
    LibrariesComponent,
    ArticlesComponent,
    ProjectsComponent,
    WorkComponent,
    TimelineCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
