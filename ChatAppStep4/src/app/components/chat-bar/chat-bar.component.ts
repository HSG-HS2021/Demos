import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person } from '../shared/models/person';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css'],
})
export class ChatBarComponent implements OnInit {
  @Output() submitMessage = new EventEmitter<string>();

  public chatMessage = '';
  public errorMessage = '';

  constructor() {}

  ngOnInit(): void {}

  public addMessage(message: string): void {
    if (!message?.trim()) {
      this.errorMessage = 'Bitte Text erfassen!';
      this.chatMessage = '';

      // alert(this.errorMessage);
      // console.log(this.errorMessage);

      return;
    }

    if (!Person.Nickname) {
      this.errorMessage = 'Bitte Nickname erfassen!';

      return;
    }

    const timestamp: string = new Date().toLocaleString('de');
    const messageToSend = `<p>${Person.Nickname}<p><p>${message} - ${timestamp}<p>`;

    this.submitMessage.emit(messageToSend);

    this.chatMessage = '';
    this.errorMessage = '';
  }
}
