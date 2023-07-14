import {Component, Injectable} from '@angular/core';

import {FormControl} from '@angular/forms';
import Message from "../../../../models/messageModel";
import {Store} from "@ngrx/store";
import {MessageActions} from "../../../../store/messages/messages.actions";

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.scss']
})

export class WriterComponent {
  constructor(private readonly _store: Store) { }

  messageToSend: FormControl<string | null> = new FormControl('');
  msg: Message = new Message('', '', '', 0, '');

  public sendMessage(): void {
    if (this.messageToSend.value !== null) {
      this.msg.roomId = '1';
      this.msg.message = this.messageToSend.value;
      this.msg.sender = 'Ariel Magnetic';
      this._store.dispatch(MessageActions.addMessage({ message: this.msg }));
    }
  }
}
