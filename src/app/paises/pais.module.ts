import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './paginas/por-capital/por-capital.component';
import { PorPaisComponent } from './paginas/por-pais/por-pais.component';
import { PorRegionComponent } from './paginas/por-region/por-region.component';
import { InfoPaisComponent } from './paginas/info-pais/info-pais.component';
import { TablaComponent } from './componentes/tabla/tabla.component';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    InfoPaisComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    RouterModule
  ]
})
export class PaisModule { }
