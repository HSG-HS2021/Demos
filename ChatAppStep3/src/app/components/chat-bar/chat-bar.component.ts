import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css'],
})
export class ChatBarComponent implements OnInit {
  @Output() submitMessage = new EventEmitter<string>();

  public chatMessage = '';

  constructor() {}

  ngOnInit(): void {}

  public addMessage(message: string): void {
    if (!message) {
      alert('Bitte Text erfassen!');
      return;
    }

    // alert(message);

    this.submitMessage.emit(message);

    this.chatMessage = '';
  }
}
