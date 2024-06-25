import { ButtonComponent } from './../../shared/button/button.component';
import { Component } from '@angular/core';
import { FORM } from '../../constans/form';
import { OpeningSentenceComponent } from '../opening-sentence/opening-sentence.component';
import { InputComponent } from '../../shared/input/input.component';
import { GENERAL } from '../../constans/general';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    OpeningSentenceComponent,
    ButtonComponent,
    InputComponent,
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
  text: string = FORM.BUTTON_TEXT;
  form: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      sentence: [FORM.SENTENCE, Validators.required],
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form.value);
    console.log('Description:', this.form.get('name')?.value.target.value);
  }
}
