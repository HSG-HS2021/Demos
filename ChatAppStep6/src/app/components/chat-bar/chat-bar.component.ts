import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatMessage } from '../shared/models/chat-message';
import { Person } from '../shared/models/person';
import { ChatService } from '../shared/services/chat.service';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css'],
})
export class ChatBarComponent implements OnInit {
  @Output() submitMessage = new EventEmitter<string>();

  public chatMessage = '';
  public errorMessage = '';

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {}

  public addMessage(message: string): void {
    if (!message?.trim()) {
      this.errorMessage = 'Bitte Text erfassen!';
      this.chatMessage = '';

      return;
    }

    if (!Person.Nickname) {
      this.errorMessage = 'Bitte Nickname erfassen!';
      // alert('Bitte Nickname erfassen!');
      // console.log('Bitte Nickname erfassen!');

      return;
    }

    const messageToSend: ChatMessage = {
      message,
      nickname: Person.Nickname,
    };

    this.chatService.addToHistory(messageToSend).subscribe(
      (response: ChatMessage) => {
        this.chatMessage = '';
        this.errorMessage = '';
      },
      (error: any) => {
        this.errorMessage = error;
      }
    );
  }
}
