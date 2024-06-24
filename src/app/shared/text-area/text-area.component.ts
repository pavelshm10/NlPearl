import { Component, Input } from '@angular/core';
import { FORM } from '../../constans/form';

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.css'
})
export class TextAreaComponent {
  @Input() label: string = '';
  @Input() sentence: string = FORM.SENTENCE;
}
