import User from "./userModel";
import Message from "./messageModel";

export default class roomModel {
  private _id: string;
  private _title: string;
  private _users: User[];
  private _messages: Message[];

  get accessId(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get accessTitle(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get accessUsers(): User[] {
    return this._users;
  }

  set users(value: User[]) {
    this._users = value;
  }

  get accessMessages(): Message[] {
    return this._messages;
  }

  set messages(value: Message[]) {
    this._messages = value;
  }

  constructor(id: string, title: string, users: User[], messages: Message[]) {
    this._id = id;
    this._title = title;
    this._users = users;
    this._messages = messages;
  }
}
