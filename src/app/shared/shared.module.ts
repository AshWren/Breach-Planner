import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
