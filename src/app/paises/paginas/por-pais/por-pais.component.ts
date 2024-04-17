import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais';
import { PaisService } from '../../servicio/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrl: './por-pais.component.css'
})
export class PorPaisComponent implements OnInit {
  pais:Pais[] = [];

  constructor(private PaisService:PaisService) { }

  buscarPorPais(term:string):void {
    if(term==='') this.pais=[];
    this.PaisService.PeticionPorPais(term).subscribe(data => {
      this.pais=data;
    })
  }
  ngOnInit(){
    this.pais=this.PaisService.cache.porPais.paises;
  }
}
