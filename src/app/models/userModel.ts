export default class User {
  private _id: string;
  private _username: string;

  // create getters and setters for id, username, image, and phoneNumber

  constructor(id: string, username: string) {
    this._id = id;
    this._username = username;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }
}
