import { Component } from '@angular/core';
import { GENERAL } from '../../constans/general';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css',
})
export class MessageComponent {
  message: string = GENERAL.MESSAGE;
}
