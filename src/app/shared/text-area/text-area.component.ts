import { Component, Input } from '@angular/core';
import { FORM } from '../../constans/form';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.css',
})
export class TextAreaComponent {
  @Input() label: string = '';
  @Input() sentence: string = FORM.SENTENCE;
  companyName: string = FORM.COMPANY_NAME;
  agentName: string = FORM.AGENT_NAME;
  firstName: string = FORM.FIRST_NAME;
  lastName: string = FORM.LAST_NAME;
}
