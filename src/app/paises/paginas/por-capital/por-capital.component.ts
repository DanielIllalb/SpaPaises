import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais';
import { PaisService } from '../../servicio/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrl: './por-capital.component.css'
})
export class PorCapitalComponent implements OnInit {

  constructor(private PaisService:PaisService) { }
  
    capital:Pais[]= [];

    buscarPorCapital(term:string):void {
      if(term==='') this.capital=[];
      this.PaisService.PeticionPorCapital(term).subscribe(data => {
        this.capital=data;   
      })
    }
    ngOnInit(){
      this.capital=this.PaisService.cache.porCapital.paises;
    }
}
