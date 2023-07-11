export default class User {
  protected _id: number = 0;
  private _username: string = "";
  private _image: string = "";
  private _phoneNumber: string = "";

  // create getters and setters for id, username, image, and phoneNumber
  public set id(id: number) {
    this._id = id;
  }

  public get accessId(): number {
    return this._id;
  }

  public get accessUsername(): string {
    return this._username;
  }

  public set username(value: string) {
    this._username = value;
  }

  get accessImage(): string {
    return this._image;
  }

  public set image(value: string) {
    this._image = value;
  }

  public get accessPhoneNumber(): string {
    return this._phoneNumber;
  }

  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  constructor(id: number, username: string, image: string, phoneNumber: string) {
    this.id = id;
    this.username = username;
    this.image = image;
    this.phoneNumber = phoneNumber;
  }
}