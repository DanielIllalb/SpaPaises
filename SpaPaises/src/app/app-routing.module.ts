import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPaisComponent } from './paises/paginas/info-pais/info-pais.component';
import { PorCapitalComponent } from './paises/paginas/por-capital/por-capital.component';
import { PorPaisComponent } from './paises/paginas/por-pais/por-pais.component';
import { PorRegionComponent } from './paises/paginas/por-region/por-region.component';

const routes: Routes = [
  { path:'por-capital', component:PorCapitalComponent},
  { path:'por-pais', component:PorPaisComponent},
  { path:'por-region', component:PorRegionComponent},
  { path:'info-pais/:id', component:InfoPaisComponent},
  { path:'##', redirectTo:'por-pais'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
