import { Component, Input, forwardRef } from '@angular/core';
import { FORM } from '../../constans/form';
import { ButtonComponent } from '../../shared/button/button.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-opening-sentence',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './opening-sentence.component.html',
  styleUrl: './opening-sentence.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OpeningSentenceComponent),
      multi: true,
    },
  ],
})
export class OpeningSentenceComponent implements ControlValueAccessor {
  @Input() label: string = '';
  companyName: string = FORM.COMPANY_NAME;
  agentName: string = FORM.AGENT_NAME;
  firstName: string = FORM.FIRST_NAME;
  lastName: string = FORM.LAST_NAME;

  value: any;
  onChange: any = () => {};
  onTouched: any = () => {};

  setValue(value: string) {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }

  handleInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.setValue(inputElement.value);
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  handleButtonClick(buttonText: string) {
    console.log(this.value);
    let replacedStr;
    switch (buttonText) {
      case FORM.COMPANY_NAME:
        replacedStr = this.value.replace(/\[company_name\]/g, buttonText);
        break;
      case FORM.AGENT_NAME:
        replacedStr = this.value.replace(/\[agent_name\]/g, buttonText);
        break;
      case FORM.FIRST_NAME:
        replacedStr = this.value.replace(/\[first_name\]/g, buttonText);
        break;
      case FORM.LAST_NAME:
        replacedStr = this.value.replace(/\[last_name\]/g, buttonText);
        break;
    }
    this.setValue(replacedStr);
  }
}
