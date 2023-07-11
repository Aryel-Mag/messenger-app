import { Component } from '@angular/core';
import User from 'src/app/models/userModel';
@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent {
  userList: User[] = [];
  user1: User = new User(
    1,
    'John Doe',
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    '+41 76 354 56 78'
  );

  user2: User = new User(
    2,
    'Mike Faye',
    'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    '+41 76 442 42 12'
  );

  user3: User = new User(
    3,
    'Alice Lewis',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80',
    '+41 76 442 42 12'
  );

  ngOnInit(): void {
    this.userList.push(this.user1, this.user2, this.user3);
  }

}
