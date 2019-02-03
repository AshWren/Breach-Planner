import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfo, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { SkillComponent } from './skill/skill.component';


library.add(faInfo, faInfoCircle);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterPipe,
    ClassDetailComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
