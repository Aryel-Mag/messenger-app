import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, tap } from 'rxjs/operators';
import Message from "../models/messageModel";
import User from "../models/userModel";


const URL_MESSAGES = "http://localhost:3001/messages/";
const URL_USERS = "http://localhost:3001/users/";

@Injectable({
  providedIn: 'root'
})

class HttpService {

  constructor(private readonly _http: HttpClient) { }

  public postMessage(message: Message): Observable<Message> {
    try {

      // CREATES JSON FILE WITH BEER INTERFACE
      let json = {
        message: message.message,
        roomId: message.roomId,
        sender: message.sender
      };

      const msg$: Observable<Message> = this._http.post(URL_MESSAGES, json).pipe(
        map((msgObj: Object) => msgObj as Message)
      );
      return msg$;
    } catch (error) {
      console.error(error);
      throw (error);
    }
  }

  public postUser(user: User): Observable<User> {
    try {

      // CREATES JSON FILE WITH BEER INTERFACE
      let json = {
        username: user.username,
      };

      const user$: Observable<User> = this._http.post(URL_USERS + 'login', json).pipe(
        map((usrObj: Object) => usrObj as User)
      );
      return user$;
    } catch (error) {
      console.error(error);
      throw (error);
    }
  }

  /*deleteBeer(id: number): void {
    this._http.delete(URLBEERS + "/" + id).subscribe();
  }*/

}
export default HttpService
