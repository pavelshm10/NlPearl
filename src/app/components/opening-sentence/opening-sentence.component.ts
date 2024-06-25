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
      multi: true
    }
  ]
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

  setValue(value: any) {
    this.value = value.target.value;
    this.onChange(value);
    this.onTouched();
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
}
