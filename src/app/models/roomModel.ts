import User from "./userModel";
import Message from "./messageModel";

export default class Room {
  private _id: string;
  private _name: string;
  private _avatar: string;
  private _admins: User[];
  private _guests: User[];
  private _messages: Message[];
  private _ts: number;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get avatar(): string {
    return this._avatar;
  }

  set avatar(value: string) {
    this._avatar = value;
  }

  get admins(): User[] {
    return this._admins;
  }

  set admins(value: User[]) {
    this._admins = value;
  }

  get guests(): User[] {
    return this._guests;
  }

  set guests(value: User[]) {
    this._guests = value;
  }

  get messages(): Message[] {
    return this._messages;
  }

  set messages(value: Message[]) {
    this._messages = value;
  }

  get ts(): number {
    return this._ts;
  }

  set ts(value: number) {
    this._ts = value;
  }

  constructor(id: string, name: string, avatar: string, admins: User[], guests: User[], messages: Message[], ts: number) {
    this._id = id;
    this._name = name;
    this._avatar = avatar;
    this._admins = admins;
    this._guests = guests;
    this._messages = messages;
    this._ts = ts;
  }


}
