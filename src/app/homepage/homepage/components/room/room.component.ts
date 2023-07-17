import { Component, Input } from '@angular/core';
import User from 'src/app/models/userModel';
import Message from "../../../../models/messageModel";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {
  @Input() userImg: string = ''; // decorate the property with @Input()
  @Input() username!: string; // decorate the property with @Input()
  @Input() lastMessage!: Message; // decorate the property with @Input()
}
