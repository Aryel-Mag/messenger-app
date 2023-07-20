import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  constructor(private socket: Socket) { }

  // listen event
  onSendMessage() {
    return this.socket.fromEvent('new-message');
  }
}
