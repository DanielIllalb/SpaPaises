import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrl: './searchbox.component.css'
})
export class SearchboxComponent {
  @Output() onValue=new EventEmitter<string>();

  onChange(inputText:string) {
    this.onValue.emit(inputText);
  }
}
