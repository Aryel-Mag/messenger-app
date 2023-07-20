import {Component, Injectable} from '@angular/core';

import {FormControl} from '@angular/forms';
import Message from "../../../../models/messageModel";
import {select, Store} from "@ngrx/store";
import {MessageActions} from "../../../../store/messages/messages.actions";
import {Observable, Subscription} from "rxjs";
import User from "../../../../models/userModel";
import {selectUser} from "../../../../store/users/users.selectors";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.scss']
})

export class WriterComponent {
  ROOM_ID = '64b14414a489ebe30eeb649f';

  public user$!: Observable<User>;
  sub: Subscription = new Subscription();

  user: User = new User('', '');

  constructor(private readonly _store: Store) { }

  // LINKING THE INPUT FIELD TO THE FORM CONTROL VARIABLE
  messageToSend: FormControl<string | null> = new FormControl('');

  ngOnInit(): void {
    this.user$ = this._store.select(selectUser);
    this.sub = this.user$.subscribe(user => this.user = user);
  }

  /**
   * SENDS A MESSAGE TO THE SERVER
   */
  public sendMessage(): void {
    if (this.messageToSend.value !== null) {
      let message: Message = new Message('', this.ROOM_ID, this.messageToSend.value, 0, this.user.username);
      this._store.dispatch(MessageActions.addMessage({ message: message }));
      this.messageToSend.setValue('');
    }
  }

  ngOnDestroy(): void {
    if (this.sub) {
    this.sub.unsubscribe();
    }
  }
}
