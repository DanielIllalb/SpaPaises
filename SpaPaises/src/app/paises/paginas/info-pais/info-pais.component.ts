import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Pais } from '../../interfaces/pais';
import { PaisService } from '../../servicio/pais.service';

@Component({
  selector: 'app-info-pais',
  templateUrl: './info-pais.component.html',
  styleUrl: './info-pais.component.css'
})
export class InfoPaisComponent {
  objetoPais!: Pais;

  constructor(private service: PaisService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.service.PeticionInfoPais(id))
    ).subscribe(data => {
      if (!data) {
        return this.router.navigateByUrl("");
      }
      return this.objetoPais = data;
    })
  }

}
