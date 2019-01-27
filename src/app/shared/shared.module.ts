import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { BackButtonComponent } from './back-button/back-button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BackButtonComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    HeaderComponent,
    BackButtonComponent,
  ]
})
export class SharedModule { }