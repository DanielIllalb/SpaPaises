import { Component, Input } from '@angular/core';
import { Pais } from '../../interfaces/pais';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
 @Input() pais:Pais[] = []
}
