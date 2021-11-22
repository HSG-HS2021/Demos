import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ChatAppStep';

  public messageHistory = '';

  public onSubmitMessage($event: string): void {
    // alert($event);

    if (!this.messageHistory) {
      this.messageHistory = '';
    }

    this.messageHistory += $event;
  }
}
