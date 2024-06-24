import { ButtonComponent } from './../../shared/button/button.component';
import { Component } from '@angular/core';
import { FORM } from '../../constans/form';
import { TextAreaComponent } from '../../shared/text-area/text-area.component';
import { InputComponent } from '../../shared/input/input.component';
import { GENERAL } from '../../constans/general';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TextAreaComponent,
    ButtonComponent,
    InputComponent,
    TextAreaComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  phone: string = FORM.PHONE;
  name: string = FORM.NAME;
  buttonText: string = FORM.BUTTON_TEXT;
  sentence_label: string = FORM.SENTENCE_LABEL;
  title = GENERAL.TITLE;
}
