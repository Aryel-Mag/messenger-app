import { Component } from '@angular/core';
import Message from "../../../../models/messageModel";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {selectSentMessage} from "../../../../store/messages/messages.selectors";

@Component({
  selector: 'app-chat-main',
  templateUrl: './chat-main.component.html',
  styleUrls: ['./chat-main.component.scss']
})
export class ChatMainComponent {
  public allMessages$!: Observable<Message[]>;

  constructor(
    private readonly _store: Store
  ) { }

  ngOnInit() {

    this.allMessages$ = this._store.select(selectSentMessage);

    // this.list$ = this._beerList.getBeersAPI();
  }
}
