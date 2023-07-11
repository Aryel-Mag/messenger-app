export default class Message {
  private _id: number = 0;
  private _message: string = '';
  private _timestamp: number = 0;
  private _sender: string = '';

  // getters and setters for id, message, timestamp, and sender
  set id(value: number) {
    this.id = value;
  }

  get accessId(): number {
    return this.id;
  }

  set message(value: string) {
    this.message = value;
  }

  get accessMessage(): string {
    return this.message;
  }

  set timestamp(value: number) {
    this.timestamp = value;
  }

  get accessTimestamp(): number {
    return this.timestamp;
  }

  set sender(value: string) {
    this.sender = value;
  }

  get accessSender(): string {
    return this.sender;
  }

  constructor(id: number, message: string, timestamp: number, sender: string) {
    this._id = id;
    this._message = message;
    this._timestamp = timestamp;
    this._sender = sender;
  }
}