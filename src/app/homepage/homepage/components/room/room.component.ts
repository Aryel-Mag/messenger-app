import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {
  @Input() username!: string; // decorate the property with @Input()
  @Input() lastMessage!: string; // decorate the property with @Input()
}
