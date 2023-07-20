import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable, of, Subscription} from "rxjs";
import { map, tap } from 'rxjs/operators';
import Message from "../models/messageModel";
import User from "../models/userModel";
import Room from "../models/roomModel";
import {Store} from "@ngrx/store";
import {selectUser} from "../store/users/users.selectors";
import {switchMap} from "rxjs";


const URL_MESSAGES = "http://localhost:3001/messages/";
const URL_USERS = "http://localhost:3001/users/";
const URL_ROOMS = "http://localhost:3001/rooms/all/";

@Injectable({
  providedIn: 'root'
})

class HttpService {
  public user$!: Observable<User>;

  constructor(private readonly _http: HttpClient, private readonly _store: Store) { }

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

  public getRooms(username: string): Observable<Room[]> {
    //let user$!: Observable<User>;
    //let username: string = ''
    try {
      // GET ROOMS FROM DATABASE ACCORDING TO THE USERNAME
      const rooms: Observable<Room[]> = this._http.get(URL_ROOMS + username).pipe(
        map((rooms: Object) => rooms as Room[]),
      )
      return rooms
    } catch (error) {
      console.error(error);
      throw (error)
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
}
export default HttpService
