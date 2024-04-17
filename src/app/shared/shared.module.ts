import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { SearchboxComponent } from './componentes/searchbox/searchbox.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent,
    SearchboxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    SearchboxComponent
  ]
})
export class SharedModule { }
