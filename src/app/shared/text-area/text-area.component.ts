import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.css'
})
export class TextAreaComponent {
  @Input() label: string = '';
  @Input() message: string = 'test';
}
