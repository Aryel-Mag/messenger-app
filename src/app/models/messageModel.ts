export default class Message {
  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get roomId(): string {
    return this._roomId;
  }

  set roomId(value: string) {
    this._roomId = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  get ts(): number {
    return this._ts;
  }

  set ts(value: number) {
    this._ts = value;
  }

  get sender(): string {
    return this._sender;
  }

  set sender(value: string) {
    this._sender = value;
  }
  private _id: string;
  private _roomId: string;
  private _message: string;
  private _ts: number;
  private _sender: string;

  // getters and setters for id, message, timestamp, and senders

  constructor(id: string, roomId:string, message: string, ts: number, sender: string) {
    this._id = id;
    this._roomId = roomId
    this._message = message;
    this._ts = ts;
    this._sender = sender;
  }
}
