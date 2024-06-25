import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FORM } from '../../constans/form';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string = '';
  @Output() buttonClick: EventEmitter<string> = new EventEmitter<string>();

  onClickButton(){
    this.buttonClick.emit(this.text);
  }
}
