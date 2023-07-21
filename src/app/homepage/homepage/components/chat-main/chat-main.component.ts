import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Observable, Subject, Subscription, switchMap} from "rxjs";
import {Store} from "@ngrx/store";
import Room from "../../../../models/roomModel";
import {selectRoom} from "../../../../store/rooms/rooms.selectors";
import {selectUser} from "../../../../store/users/users.selectors";
import {SocketService} from "../../../../services/socket.service";
import {RoomsActions} from "../../../../store/rooms/rooms.actions";
import User from "../../../../models/userModel";


@Component({
  selector: 'app-chat-main',
  templateUrl: './chat-main.component.html',
  styleUrls: ['./chat-main.component.scss']
})
export class ChatMainComponent implements AfterViewInit {
  @ViewChild('scrollframe', {static: false}) scrollFrame!: ElementRef;
  @ViewChildren('message') itemElements!: QueryList<any>;

  private scrollContainer: any;
  private isNearBottom: boolean = true;

  public room$!: Observable<Room>;

  public sub1!: Subscription;
  public sub3!: Subscription;

  public user$!: Observable<User>;
  user: User = new User('', '');

  constructor(
    private readonly _store: Store,
    private _socketService: SocketService,
  ) { }

  ngAfterViewInit() {
    this.room$ = this._store.select(selectRoom);

    this.user$ = this._store.select(selectUser);
    this.sub1 = this.user$.subscribe( user => { this.user = user; });

    this._socketService.onSendMessage();

    this.sub3 = this._socketService.onSendMessage().subscribe(message => {
      this._store.dispatch(RoomsActions.addMessage({message: message}));
    });

    this.scrollContainer = this.scrollFrame.nativeElement;
    this.itemElements.changes.subscribe(_ => this.onMessageElementChange());
  }

  private onMessageElementChange(): void {
    if (this.isNearBottom) {
      this.scrollToBottom();
    }
  }

  private scrollToBottom(): void {
    this.scrollContainer.scroll({
      top: this.scrollContainer.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  private isUserNearBottom(): boolean {
    const threshold = 150;
    const position = this.scrollContainer.scrollTop + this.scrollContainer.offsetHeight;
    const height = this.scrollContainer.scrollHeight;
    return position > height - threshold;
  }

  scrolled(event: any): void {
    this.isNearBottom = this.isUserNearBottom();
  }

  ngOnDestroy() {
    if(this.sub1) {
      this.sub1.unsubscribe();
    }
    if(this.sub3) {
      this.sub3.unsubscribe();
    }
  }
}
