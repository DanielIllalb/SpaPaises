import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais';
import { PaisService } from '../../servicio/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrl: './por-region.component.css'
})
export class PorRegionComponent implements OnInit{
  region:Pais[] = [];

  constructor(private PaisService:PaisService) { }

  buscarPorRegion(term:string):void {
    console.log(this.region)
    if(term==='') this.region=[];
    this.PaisService.PeticionPorRegion(term).subscribe(data => {
      this.region=data;
    })
  }

  ngOnInit(){
    this.region=this.PaisService.cache.porRegion.paises;
  }
}
